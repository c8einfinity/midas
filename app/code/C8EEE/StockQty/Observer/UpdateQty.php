<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace C8EEE\StockQty\Observer;

use Magento\CatalogInventory\Api\StockRegistryInterface;
use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;

class UpdateQty implements ObserverInterface
{
    /**
     * @var StockRegistryInterface
     */
    protected $stockRegistry;


    public function __construct( StockRegistryInterface $stockRegistry )
    {
        // Observer initialization code...
        // You can use dependency injection to get any class this observer may need.
        $this->stockRegistry = $stockRegistry;

    }

    public function execute(Observer $observer)
    {
        // Observer execution code...
        $event = $observer->getEvent();
        $product = $event->getProduct();
        $sku = $product->getSku();

        $fileName = realpath("/home/midas/midasdocs/stock/Diesel_stock.txt");
        //$otherFile = realpath("/home/midas/midasdocs/stock/Diesel_stock.txt");
        if (file_exists($fileName)) {
            global $productList;
            global $productPromotionCategory;
            $productPromotionCategory = 1025;

            $contents = [];
            if (file_exists($fileName)) {
                $contents = explode("\n", file_get_contents($fileName));
            }

            foreach ($contents as $id => $line) {
                $line = explode("\t", $line); // SKU 0

                if (!empty($line[1])) {
                    $productList[trim($line[0])] = (int)trim($line[1]) + 0; //Making sure this is a number and it is clean
                } else {
                    $productList[trim($line[0])] = 0;
                }
            }
        }

        //Does this exist
        if (key_exists($sku, $productList)) { //$productList[$sku] == 0;
            $qty = $productList[$sku] ?? 0;

            $inStock = 1;
            if ($qty <= 0) {
                $inStock = 0;
            }

            $stockItem = $this->stockRegistry->getStockItemBySku($sku);
            $stockItem->setQty($qty);
            $stockItem->setIsInStock((bool)$qty); // this line
            $this->stockRegistry->updateStockItemBySku($sku, $stockItem);

            $product->setQuantityAndStockStatus(['qty' => $qty, 'is_in_stock' => $inStock, 'manage_stock' => 1, 'use_config_manage_stock' => 0]);
            $product->save();
        }

    }
}

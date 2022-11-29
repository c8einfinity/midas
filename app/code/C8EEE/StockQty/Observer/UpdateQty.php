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

        $fileName = realpath("/home/midas/midasdocs/stock/Midas_b2c.txt");
        $otherFile = realpath("/home/midas/midasdocs/stock/Diesel_stock.txt");
        if (file_exists($fileName) || file_exists($otherFile)) {
            global $productList;
            global $productPromotionCategory;
            $productPromotionCategory = 1025;

            $contents = [];
            if (file_exists($fileName)) {
                $contents = explode("\n", file_get_contents($fileName));
            }

            if (file_exists($otherFile)) {
                $otherContents = explode("\n", file_get_contents($otherFile));
                $contents = array_merge ($contents, $otherContents);
            }

            foreach ($contents as $id => $line) {
                $line = explode("\t", $line);
                if (!empty($line[1])) {
                    if ($line[1] > 2) {
                        $productList[$line[0]] = $line[1];
                    }
                }
            }
        }

        //print_r ($productList);
        //file_get_contents();
        $qty = $productList[$sku] ?? 0;

        $inStock = 1;
        if ( $qty <= 0 ) {
            $inStock = 0;
        }

        $stockItem = $this->stockRegistry->getStockItemBySku($sku);
        $stockItem->setQty($qty);
        $stockItem->setIsInStock((bool)$qty); // this line
        $this->stockRegistry->updateStockItemBySku($sku, $stockItem);

        $product->setQuantityAndStockStatus(['qty' => $qty, 'is_in_stock' => $inStock ,'manage_stock' => 1, 'use_config_manage_stock' => 0 ]);
        $product->save();

    }
}

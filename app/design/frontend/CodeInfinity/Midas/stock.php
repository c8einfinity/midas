<?php
//ho "...";
$fileName = realpath("../midasdocs/stock/Midas_b2c.txt");
$otherFile = realpath("../midasdocs/stock/Diesel_stocks.txt");//added 's' to make midas work again
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
} else {
//  mail("ruth@expertecommerce.co.za", "MIDAS.CO.ZA", "The file is missing for stock /home/midas/midasdocs/stock/Midas_b2c.txt");
}
global $globalInStoreButton;
$globalInStoreButton = <<<EOD
<a href="/store-locator"
    title="Enquire in Store"
    class="action tocart primary">
<span>Enquire in Store</span>
</a>
EOD;

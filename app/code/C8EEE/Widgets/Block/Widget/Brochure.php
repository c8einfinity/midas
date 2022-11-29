<?php
/**
 * Copyright © 2022 - Code Infinity. All rights reserved.
 * See LICENSE.txt for license details.
 *
 * @author Justin Bruce <justin@codeinfinity.co.za>
 */

namespace C8EEE\Widgets\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;


class Brochure extends Template implements BlockInterface
{
    protected $_template = "widget/brochure.phtml";
}
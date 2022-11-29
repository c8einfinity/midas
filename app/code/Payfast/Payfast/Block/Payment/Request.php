<?php
/**
 * Copyright (c) 2008 PayFast (Pty) Ltd
 * You (being anyone who is not PayFast (Pty) Ltd) may download and use this plugin / code in your own website in conjunction with a registered and active PayFast account. If your PayFast account is terminated for any reason, you may not use this plugin / code or part thereof.
 * Except as expressly indicated in this licence, you may not use, copy, modify or distribute this plugin / code or part thereof in any way.
 */

namespace Payfast\Payfast\Block\Payment;

use Magento\Framework\Filesystem\Directory\ReadFactory;
use Magento\Framework\Module\Dir\Reader;
use Magento\Framework\View\Element\Template\Context;
use Magento\Sales\Model\OrderFactory;
use Payfast\Payfast\Helper\Data;
use Payfast\Payfast\Model\Payfast;
use Magento\Checkout\Model\Session;

class Request extends \Magento\Framework\View\Element\Template
{

    /** @var Payfast $_paymentMethod*/
    protected $_paymentMethod;

    /**
     * @var OrderFactory
     */
    protected $_orderFactory;

    /**
     * @var Session
     */
    protected $_checkoutSession;

    /** @var ReadFactory  $readFactory*/
    protected $readFactory;

    /** @var Reader $reader */
    protected $reader;

    /**
     * @param Context $context
     * @param OrderFactory $orderFactory
     * @param Session $checkoutSession
     * @param Data $pfHelper
     * @param ReadFactory $readFactory
     * @param Reader $reader
     * @param Payfast $paymentMethod
     * @param array $data
     */
    public function __construct(
        Context $context,
        OrderFactory $orderFactory,
        Session $checkoutSession,
        Data $pfHelper,
        ReadFactory $readFactory,
        Reader $reader,
        Payfast $paymentMethod,
        array $data = []
    ) {
        $this->_hssHelper = $pfHelper;
        $this->_orderFactory = $orderFactory;
        $this->_checkoutSession = $checkoutSession;
        parent::__construct($context, $data);
        $this->_isScopePrivate = true;
        $this->readFactory = $readFactory;
        $this->reader = $reader;
        $this->_paymentMethod = $paymentMethod;
    }

    public function _prepareLayout()
    {
        $this->setMessage('Redirecting to Payfast')
            ->setId('payfast_checkout')
            ->setName('payfast_checkout')
            ->setFormMethod('POST')
            ->setFormAction($this->_paymentMethod->getPayFastUrl())
            ->setFormData($this->_paymentMethod->getStandardCheckoutFormFields())
            ->setSubmitForm('<script type="text/javascript">document.getElementById( "payfast_checkout" ).submit();</script>');

        return parent::_prepareLayout(); // TODO: Change the autogenerated stub
    }
}

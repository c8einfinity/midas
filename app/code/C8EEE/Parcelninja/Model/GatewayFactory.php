<?php

namespace C8EEE\Parcelninja\Model;

class GatewayFactory
{

    /**
     * Object manager
     *
     * @var \Magento\Framework\ObjectManagerInterface
     */
    protected $_objectManager;

    /**
     * @param \Magento\Framework\ObjectManagerInterface $objectmanager
     */
    public function __construct(\Magento\Framework\ObjectManagerInterface $objectmanager)
    {
        $this->_objectManager = $objectmanager;
    }

    /**
     * Create backend model by name
     *
     * @param string $modelName
     * @param array $arguments The object arguments
     * @return \Magento\Framework\App\Config\ValueInterface
     * @throws \InvalidArgumentException
     */
    public function create($modelName, array $arguments = [])
    {
        $model = $this->_objectManager->create($modelName, $arguments);
        if (!$model instanceof \Magento\Framework\DataObject) {
            throw new \InvalidArgumentException('Invalid Shipping Provider model: ' . $modelName);
        }
        return $model;
    }
}

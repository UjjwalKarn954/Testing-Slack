"use strict";
// https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DataAwsMskBrokerNodes = exports.DataAwsMskBrokerNodesNodeInfoList = void 0;
var cdktf = require("cdktf");
var DataAwsMskBrokerNodesNodeInfoList = /** @class */ (function (_super) {
    __extends(DataAwsMskBrokerNodesNodeInfoList, _super);
    function DataAwsMskBrokerNodesNodeInfoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsMskBrokerNodesNodeInfoList.prototype, "attachedEniId", {
        // attached_eni_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attached_eni_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskBrokerNodesNodeInfoList.prototype, "brokerId", {
        // broker_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('broker_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskBrokerNodesNodeInfoList.prototype, "clientSubnet", {
        // client_subnet - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_subnet');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskBrokerNodesNodeInfoList.prototype, "clientVpcIpAddress", {
        // client_vpc_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_vpc_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskBrokerNodesNodeInfoList.prototype, "endpoints", {
        // endpoints - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('endpoints');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskBrokerNodesNodeInfoList.prototype, "nodeArn", {
        // node_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_arn');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsMskBrokerNodesNodeInfoList;
}(cdktf.ComplexComputedList));
exports.DataAwsMskBrokerNodesNodeInfoList = DataAwsMskBrokerNodesNodeInfoList;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes}
*/
var DataAwsMskBrokerNodes = /** @class */ (function (_super) {
    __extends(DataAwsMskBrokerNodes, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskBrokerNodesConfig
    */
    function DataAwsMskBrokerNodes(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_msk_broker_nodes',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterArn = config.clusterArn;
        return _this;
    }
    Object.defineProperty(DataAwsMskBrokerNodes.prototype, "clusterArn", {
        get: function () {
            return this.getStringAttribute('cluster_arn');
        },
        set: function (value) {
            this._clusterArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskBrokerNodes.prototype, "clusterArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskBrokerNodes.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // node_info_list - computed: true, optional: false, required: false
    DataAwsMskBrokerNodes.prototype.nodeInfoList = function (index) {
        return new DataAwsMskBrokerNodesNodeInfoList(this, 'node_info_list', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsMskBrokerNodes.prototype.synthesizeAttributes = function () {
        return {
            cluster_arn: cdktf.stringToTerraform(this._clusterArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsMskBrokerNodes.tfResourceType = "aws_msk_broker_nodes";
    return DataAwsMskBrokerNodes;
}(cdktf.TerraformDataSource));
exports.DataAwsMskBrokerNodes = DataAwsMskBrokerNodes;

"use strict";
// https://www.terraform.io/docs/providers/aws/d/msk_cluster.html
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
exports.DataAwsMskCluster = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html aws_msk_cluster}
*/
var DataAwsMskCluster = /** @class */ (function (_super) {
    __extends(DataAwsMskCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html aws_msk_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskClusterConfig
    */
    function DataAwsMskCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_msk_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterName = config.clusterName;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsMskCluster.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "bootstrapBrokers", {
        // bootstrap_brokers - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bootstrap_brokers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "bootstrapBrokersSaslIam", {
        // bootstrap_brokers_sasl_iam - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bootstrap_brokers_sasl_iam');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "bootstrapBrokersSaslScram", {
        // bootstrap_brokers_sasl_scram - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bootstrap_brokers_sasl_scram');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "bootstrapBrokersTls", {
        // bootstrap_brokers_tls - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bootstrap_brokers_tls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "kafkaVersion", {
        // kafka_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kafka_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "numberOfBrokerNodes", {
        // number_of_broker_nodes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number_of_broker_nodes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsMskCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsMskCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskCluster.prototype, "zookeeperConnectString", {
        // zookeeper_connect_string - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zookeeper_connect_string');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsMskCluster.prototype.synthesizeAttributes = function () {
        return {
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsMskCluster.tfResourceType = "aws_msk_cluster";
    return DataAwsMskCluster;
}(cdktf.TerraformDataSource));
exports.DataAwsMskCluster = DataAwsMskCluster;

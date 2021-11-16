"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html
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
exports.DataAwsCloudhsmV2Cluster = exports.DataAwsCloudhsmV2ClusterClusterCertificates = void 0;
var cdktf = require("cdktf");
var DataAwsCloudhsmV2ClusterClusterCertificates = /** @class */ (function (_super) {
    __extends(DataAwsCloudhsmV2ClusterClusterCertificates, _super);
    function DataAwsCloudhsmV2ClusterClusterCertificates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudhsmV2ClusterClusterCertificates.prototype, "awsHardwareCertificate", {
        // aws_hardware_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_hardware_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2ClusterClusterCertificates.prototype, "clusterCertificate", {
        // cluster_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2ClusterClusterCertificates.prototype, "clusterCsr", {
        // cluster_csr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_csr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2ClusterClusterCertificates.prototype, "hsmCertificate", {
        // hsm_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hsm_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2ClusterClusterCertificates.prototype, "manufacturerHardwareCertificate", {
        // manufacturer_hardware_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('manufacturer_hardware_certificate');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudhsmV2ClusterClusterCertificates;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudhsmV2ClusterClusterCertificates = DataAwsCloudhsmV2ClusterClusterCertificates;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster}
*/
var DataAwsCloudhsmV2Cluster = /** @class */ (function (_super) {
    __extends(DataAwsCloudhsmV2Cluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudhsmV2ClusterConfig
    */
    function DataAwsCloudhsmV2Cluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudhsm_v2_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterId = config.clusterId;
        _this._clusterState = config.clusterState;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // cluster_certificates - computed: true, optional: false, required: false
    DataAwsCloudhsmV2Cluster.prototype.clusterCertificates = function (index) {
        return new DataAwsCloudhsmV2ClusterClusterCertificates(this, 'cluster_certificates', index);
    };
    Object.defineProperty(DataAwsCloudhsmV2Cluster.prototype, "clusterId", {
        get: function () {
            return this.getStringAttribute('cluster_id');
        },
        set: function (value) {
            this._clusterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2Cluster.prototype, "clusterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2Cluster.prototype, "clusterState", {
        get: function () {
            return this.getStringAttribute('cluster_state');
        },
        set: function (value) {
            this._clusterState = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudhsmV2Cluster.prototype.resetClusterState = function () {
        this._clusterState = undefined;
    };
    Object.defineProperty(DataAwsCloudhsmV2Cluster.prototype, "clusterStateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2Cluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2Cluster.prototype, "securityGroupId", {
        // security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2Cluster.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudhsmV2Cluster.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudhsmV2Cluster.prototype.synthesizeAttributes = function () {
        return {
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            cluster_state: cdktf.stringToTerraform(this._clusterState)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudhsmV2Cluster.tfResourceType = "aws_cloudhsm_v2_cluster";
    return DataAwsCloudhsmV2Cluster;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudhsmV2Cluster = DataAwsCloudhsmV2Cluster;

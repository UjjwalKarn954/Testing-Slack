"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html
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
exports.CloudhsmV2Cluster = exports.CloudhsmV2ClusterClusterCertificates = void 0;
var cdktf = require("cdktf");
var CloudhsmV2ClusterClusterCertificates = /** @class */ (function (_super) {
    __extends(CloudhsmV2ClusterClusterCertificates, _super);
    function CloudhsmV2ClusterClusterCertificates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CloudhsmV2ClusterClusterCertificates.prototype, "awsHardwareCertificate", {
        // aws_hardware_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_hardware_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2ClusterClusterCertificates.prototype, "clusterCertificate", {
        // cluster_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2ClusterClusterCertificates.prototype, "clusterCsr", {
        // cluster_csr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_csr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2ClusterClusterCertificates.prototype, "hsmCertificate", {
        // hsm_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hsm_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2ClusterClusterCertificates.prototype, "manufacturerHardwareCertificate", {
        // manufacturer_hardware_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('manufacturer_hardware_certificate');
        },
        enumerable: false,
        configurable: true
    });
    return CloudhsmV2ClusterClusterCertificates;
}(cdktf.ComplexComputedList));
exports.CloudhsmV2ClusterClusterCertificates = CloudhsmV2ClusterClusterCertificates;
function cloudhsmV2ClusterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster}
*/
var CloudhsmV2Cluster = /** @class */ (function (_super) {
    __extends(CloudhsmV2Cluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudhsmV2ClusterConfig
    */
    function CloudhsmV2Cluster(scope, id, config) {
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
        _this._hsmType = config.hsmType;
        _this._sourceBackupIdentifier = config.sourceBackupIdentifier;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // cluster_certificates - computed: true, optional: false, required: false
    CloudhsmV2Cluster.prototype.clusterCertificates = function (index) {
        return new CloudhsmV2ClusterClusterCertificates(this, 'cluster_certificates', index);
    };
    Object.defineProperty(CloudhsmV2Cluster.prototype, "clusterId", {
        // cluster_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "clusterState", {
        // cluster_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "hsmType", {
        get: function () {
            return this.getStringAttribute('hsm_type');
        },
        set: function (value) {
            this._hsmType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "hsmTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hsmType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "securityGroupId", {
        // security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "sourceBackupIdentifier", {
        get: function () {
            return this.getStringAttribute('source_backup_identifier');
        },
        set: function (value) {
            this._sourceBackupIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudhsmV2Cluster.prototype.resetSourceBackupIdentifier = function () {
        this._sourceBackupIdentifier = undefined;
    };
    Object.defineProperty(CloudhsmV2Cluster.prototype, "sourceBackupIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceBackupIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudhsmV2Cluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CloudhsmV2Cluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudhsmV2Cluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CloudhsmV2Cluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudhsmV2Cluster.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudhsmV2Cluster.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(CloudhsmV2Cluster.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudhsmV2Cluster.prototype.synthesizeAttributes = function () {
        return {
            hsm_type: cdktf.stringToTerraform(this._hsmType),
            source_backup_identifier: cdktf.stringToTerraform(this._sourceBackupIdentifier),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: cloudhsmV2ClusterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudhsmV2Cluster.tfResourceType = "aws_cloudhsm_v2_cluster";
    return CloudhsmV2Cluster;
}(cdktf.TerraformResource));
exports.CloudhsmV2Cluster = CloudhsmV2Cluster;

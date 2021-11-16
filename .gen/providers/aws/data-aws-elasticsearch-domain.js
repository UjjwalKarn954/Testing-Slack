"use strict";
// https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html
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
exports.DataAwsElasticsearchDomain = exports.DataAwsElasticsearchDomainVpcOptions = exports.DataAwsElasticsearchDomainSnapshotOptions = exports.DataAwsElasticsearchDomainNodeToNodeEncryption = exports.DataAwsElasticsearchDomainLogPublishingOptions = exports.DataAwsElasticsearchDomainEncryptionAtRest = exports.DataAwsElasticsearchDomainEbsOptions = exports.DataAwsElasticsearchDomainCognitoOptions = exports.DataAwsElasticsearchDomainClusterConfig = exports.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig = exports.DataAwsElasticsearchDomainAdvancedSecurityOptions = void 0;
var cdktf = require("cdktf");
var DataAwsElasticsearchDomainAdvancedSecurityOptions = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainAdvancedSecurityOptions, _super);
    function DataAwsElasticsearchDomainAdvancedSecurityOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainAdvancedSecurityOptions.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainAdvancedSecurityOptions.prototype, "internalUserDatabaseEnabled", {
        // internal_user_database_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('internal_user_database_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainAdvancedSecurityOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainAdvancedSecurityOptions = DataAwsElasticsearchDomainAdvancedSecurityOptions;
var DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig, _super);
    function DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig.prototype, "availabilityZoneCount", {
        // availability_zone_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('availability_zone_count');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig = DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig;
var DataAwsElasticsearchDomainClusterConfig = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainClusterConfig, _super);
    function DataAwsElasticsearchDomainClusterConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "dedicatedMasterCount", {
        // dedicated_master_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('dedicated_master_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "dedicatedMasterEnabled", {
        // dedicated_master_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dedicated_master_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "dedicatedMasterType", {
        // dedicated_master_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dedicated_master_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "instanceCount", {
        // instance_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('instance_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "instanceType", {
        // instance_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "warmCount", {
        // warm_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('warm_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "warmEnabled", {
        // warm_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('warm_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "warmType", {
        // warm_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('warm_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "zoneAwarenessConfig", {
        // zone_awareness_config - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('zone_awareness_config');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainClusterConfig.prototype, "zoneAwarenessEnabled", {
        // zone_awareness_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('zone_awareness_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainClusterConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainClusterConfig = DataAwsElasticsearchDomainClusterConfig;
var DataAwsElasticsearchDomainCognitoOptions = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainCognitoOptions, _super);
    function DataAwsElasticsearchDomainCognitoOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainCognitoOptions.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainCognitoOptions.prototype, "identityPoolId", {
        // identity_pool_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_pool_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainCognitoOptions.prototype, "roleArn", {
        // role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainCognitoOptions.prototype, "userPoolId", {
        // user_pool_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_pool_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainCognitoOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainCognitoOptions = DataAwsElasticsearchDomainCognitoOptions;
var DataAwsElasticsearchDomainEbsOptions = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainEbsOptions, _super);
    function DataAwsElasticsearchDomainEbsOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainEbsOptions.prototype, "ebsEnabled", {
        // ebs_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ebs_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainEbsOptions.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainEbsOptions.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainEbsOptions.prototype, "volumeType", {
        // volume_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainEbsOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainEbsOptions = DataAwsElasticsearchDomainEbsOptions;
var DataAwsElasticsearchDomainEncryptionAtRest = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainEncryptionAtRest, _super);
    function DataAwsElasticsearchDomainEncryptionAtRest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainEncryptionAtRest.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainEncryptionAtRest.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainEncryptionAtRest;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainEncryptionAtRest = DataAwsElasticsearchDomainEncryptionAtRest;
var DataAwsElasticsearchDomainLogPublishingOptions = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainLogPublishingOptions, _super);
    function DataAwsElasticsearchDomainLogPublishingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainLogPublishingOptions.prototype, "cloudwatchLogGroupArn", {
        // cloudwatch_log_group_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cloudwatch_log_group_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainLogPublishingOptions.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainLogPublishingOptions.prototype, "logType", {
        // log_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('log_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainLogPublishingOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainLogPublishingOptions = DataAwsElasticsearchDomainLogPublishingOptions;
var DataAwsElasticsearchDomainNodeToNodeEncryption = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainNodeToNodeEncryption, _super);
    function DataAwsElasticsearchDomainNodeToNodeEncryption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainNodeToNodeEncryption.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainNodeToNodeEncryption;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainNodeToNodeEncryption = DataAwsElasticsearchDomainNodeToNodeEncryption;
var DataAwsElasticsearchDomainSnapshotOptions = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainSnapshotOptions, _super);
    function DataAwsElasticsearchDomainSnapshotOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainSnapshotOptions.prototype, "automatedSnapshotStartHour", {
        // automated_snapshot_start_hour - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('automated_snapshot_start_hour');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainSnapshotOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainSnapshotOptions = DataAwsElasticsearchDomainSnapshotOptions;
var DataAwsElasticsearchDomainVpcOptions = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomainVpcOptions, _super);
    function DataAwsElasticsearchDomainVpcOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticsearchDomainVpcOptions.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainVpcOptions.prototype, "securityGroupIds", {
        // security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainVpcOptions.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomainVpcOptions.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticsearchDomainVpcOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticsearchDomainVpcOptions = DataAwsElasticsearchDomainVpcOptions;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain}
*/
var DataAwsElasticsearchDomain = /** @class */ (function (_super) {
    __extends(DataAwsElasticsearchDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticsearchDomainConfig
    */
    function DataAwsElasticsearchDomain(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elasticsearch_domain',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domainName = config.domainName;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "accessPolicies", {
        // ==========
        // ATTRIBUTES
        // ==========
        // access_policies - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access_policies');
        },
        enumerable: false,
        configurable: true
    });
    // advanced_options - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.advancedOptions = function (key) {
        return new cdktf.StringMap(this, 'advanced_options').lookup(key);
    };
    // advanced_security_options - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.advancedSecurityOptions = function (index) {
        return new DataAwsElasticsearchDomainAdvancedSecurityOptions(this, 'advanced_security_options', index);
    };
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    // cluster_config - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.clusterConfig = function (index) {
        return new DataAwsElasticsearchDomainClusterConfig(this, 'cluster_config', index);
    };
    // cognito_options - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.cognitoOptions = function (index) {
        return new DataAwsElasticsearchDomainCognitoOptions(this, 'cognito_options', index);
    };
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "deleted", {
        // deleted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deleted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "domainId", {
        // domain_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    // ebs_options - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.ebsOptions = function (index) {
        return new DataAwsElasticsearchDomainEbsOptions(this, 'ebs_options', index);
    };
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "elasticsearchVersion", {
        // elasticsearch_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('elasticsearch_version');
        },
        enumerable: false,
        configurable: true
    });
    // encryption_at_rest - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.encryptionAtRest = function (index) {
        return new DataAwsElasticsearchDomainEncryptionAtRest(this, 'encryption_at_rest', index);
    };
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "kibanaEndpoint", {
        // kibana_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kibana_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    // log_publishing_options - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.logPublishingOptions = function (index) {
        return new DataAwsElasticsearchDomainLogPublishingOptions(this, 'log_publishing_options', index);
    };
    // node_to_node_encryption - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.nodeToNodeEncryption = function (index) {
        return new DataAwsElasticsearchDomainNodeToNodeEncryption(this, 'node_to_node_encryption', index);
    };
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "processing", {
        // processing - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('processing');
        },
        enumerable: false,
        configurable: true
    });
    // snapshot_options - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.snapshotOptions = function (index) {
        return new DataAwsElasticsearchDomainSnapshotOptions(this, 'snapshot_options', index);
    };
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsElasticsearchDomain.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsElasticsearchDomain.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // vpc_options - computed: true, optional: false, required: false
    DataAwsElasticsearchDomain.prototype.vpcOptions = function (index) {
        return new DataAwsElasticsearchDomainVpcOptions(this, 'vpc_options', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsElasticsearchDomain.prototype.synthesizeAttributes = function () {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsElasticsearchDomain.tfResourceType = "aws_elasticsearch_domain";
    return DataAwsElasticsearchDomain;
}(cdktf.TerraformDataSource));
exports.DataAwsElasticsearchDomain = DataAwsElasticsearchDomain;

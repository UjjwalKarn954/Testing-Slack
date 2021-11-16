"use strict";
// https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html
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
exports.ElasticsearchDomain = void 0;
var cdktf = require("cdktf");
function elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        master_user_arn: cdktf.stringToTerraform(struct.masterUserArn),
        master_user_name: cdktf.stringToTerraform(struct.masterUserName),
        master_user_password: cdktf.stringToTerraform(struct.masterUserPassword)
    };
}
function elasticsearchDomainAdvancedSecurityOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        internal_user_database_enabled: cdktf.booleanToTerraform(struct.internalUserDatabaseEnabled),
        master_user_options: cdktf.listMapper(elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform)(struct.masterUserOptions)
    };
}
function elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_zone_count: cdktf.numberToTerraform(struct.availabilityZoneCount)
    };
}
function elasticsearchDomainClusterConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dedicated_master_count: cdktf.numberToTerraform(struct.dedicatedMasterCount),
        dedicated_master_enabled: cdktf.booleanToTerraform(struct.dedicatedMasterEnabled),
        dedicated_master_type: cdktf.stringToTerraform(struct.dedicatedMasterType),
        instance_count: cdktf.numberToTerraform(struct.instanceCount),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        warm_count: cdktf.numberToTerraform(struct.warmCount),
        warm_enabled: cdktf.booleanToTerraform(struct.warmEnabled),
        warm_type: cdktf.stringToTerraform(struct.warmType),
        zone_awareness_enabled: cdktf.booleanToTerraform(struct.zoneAwarenessEnabled),
        zone_awareness_config: cdktf.listMapper(elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform)(struct.zoneAwarenessConfig)
    };
}
function elasticsearchDomainCognitoOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        identity_pool_id: cdktf.stringToTerraform(struct.identityPoolId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        user_pool_id: cdktf.stringToTerraform(struct.userPoolId)
    };
}
function elasticsearchDomainDomainEndpointOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_endpoint: cdktf.stringToTerraform(struct.customEndpoint),
        custom_endpoint_certificate_arn: cdktf.stringToTerraform(struct.customEndpointCertificateArn),
        custom_endpoint_enabled: cdktf.booleanToTerraform(struct.customEndpointEnabled),
        enforce_https: cdktf.booleanToTerraform(struct.enforceHttps),
        tls_security_policy: cdktf.stringToTerraform(struct.tlsSecurityPolicy)
    };
}
function elasticsearchDomainEbsOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ebs_enabled: cdktf.booleanToTerraform(struct.ebsEnabled),
        iops: cdktf.numberToTerraform(struct.iops),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function elasticsearchDomainEncryptAtRestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId)
    };
}
function elasticsearchDomainLogPublishingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_type: cdktf.stringToTerraform(struct.logType)
    };
}
function elasticsearchDomainNodeToNodeEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function elasticsearchDomainSnapshotOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        automated_snapshot_start_hour: cdktf.numberToTerraform(struct.automatedSnapshotStartHour)
    };
}
function elasticsearchDomainTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        update: cdktf.stringToTerraform(struct.update)
    };
}
function elasticsearchDomainVpcOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain}
*/
var ElasticsearchDomain = /** @class */ (function (_super) {
    __extends(ElasticsearchDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainConfig
    */
    function ElasticsearchDomain(scope, id, config) {
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
        _this._accessPolicies = config.accessPolicies;
        _this._advancedOptions = config.advancedOptions;
        _this._domainName = config.domainName;
        _this._elasticsearchVersion = config.elasticsearchVersion;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._advancedSecurityOptions = config.advancedSecurityOptions;
        _this._clusterConfig = config.clusterConfig;
        _this._cognitoOptions = config.cognitoOptions;
        _this._domainEndpointOptions = config.domainEndpointOptions;
        _this._ebsOptions = config.ebsOptions;
        _this._encryptAtRest = config.encryptAtRest;
        _this._logPublishingOptions = config.logPublishingOptions;
        _this._nodeToNodeEncryption = config.nodeToNodeEncryption;
        _this._snapshotOptions = config.snapshotOptions;
        _this._timeouts = config.timeouts;
        _this._vpcOptions = config.vpcOptions;
        return _this;
    }
    Object.defineProperty(ElasticsearchDomain.prototype, "accessPolicies", {
        get: function () {
            return this.getStringAttribute('access_policies');
        },
        set: function (value) {
            this._accessPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetAccessPolicies = function () {
        this._accessPolicies = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "accessPoliciesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessPolicies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "advancedOptions", {
        get: function () {
            return this.interpolationForAttribute('advanced_options'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._advancedOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetAdvancedOptions = function () {
        this._advancedOptions = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "advancedOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._advancedOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "domainId", {
        // domain_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "elasticsearchVersion", {
        get: function () {
            return this.getStringAttribute('elasticsearch_version');
        },
        set: function (value) {
            this._elasticsearchVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetElasticsearchVersion = function () {
        this._elasticsearchVersion = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "elasticsearchVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticsearchVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "kibanaEndpoint", {
        // kibana_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kibana_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "advancedSecurityOptions", {
        get: function () {
            return this.interpolationForAttribute('advanced_security_options');
        },
        set: function (value) {
            this._advancedSecurityOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetAdvancedSecurityOptions = function () {
        this._advancedSecurityOptions = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "advancedSecurityOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._advancedSecurityOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "clusterConfig", {
        get: function () {
            return this.interpolationForAttribute('cluster_config');
        },
        set: function (value) {
            this._clusterConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetClusterConfig = function () {
        this._clusterConfig = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "clusterConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "cognitoOptions", {
        get: function () {
            return this.interpolationForAttribute('cognito_options');
        },
        set: function (value) {
            this._cognitoOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetCognitoOptions = function () {
        this._cognitoOptions = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "cognitoOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cognitoOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "domainEndpointOptions", {
        get: function () {
            return this.interpolationForAttribute('domain_endpoint_options');
        },
        set: function (value) {
            this._domainEndpointOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetDomainEndpointOptions = function () {
        this._domainEndpointOptions = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "domainEndpointOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainEndpointOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "ebsOptions", {
        get: function () {
            return this.interpolationForAttribute('ebs_options');
        },
        set: function (value) {
            this._ebsOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetEbsOptions = function () {
        this._ebsOptions = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "ebsOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "encryptAtRest", {
        get: function () {
            return this.interpolationForAttribute('encrypt_at_rest');
        },
        set: function (value) {
            this._encryptAtRest = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetEncryptAtRest = function () {
        this._encryptAtRest = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "encryptAtRestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptAtRest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "logPublishingOptions", {
        get: function () {
            return this.interpolationForAttribute('log_publishing_options');
        },
        set: function (value) {
            this._logPublishingOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetLogPublishingOptions = function () {
        this._logPublishingOptions = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "logPublishingOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logPublishingOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "nodeToNodeEncryption", {
        get: function () {
            return this.interpolationForAttribute('node_to_node_encryption');
        },
        set: function (value) {
            this._nodeToNodeEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetNodeToNodeEncryption = function () {
        this._nodeToNodeEncryption = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "nodeToNodeEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeToNodeEncryption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "snapshotOptions", {
        get: function () {
            return this.interpolationForAttribute('snapshot_options');
        },
        set: function (value) {
            this._snapshotOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetSnapshotOptions = function () {
        this._snapshotOptions = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "snapshotOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomain.prototype, "vpcOptions", {
        get: function () {
            return this.interpolationForAttribute('vpc_options');
        },
        set: function (value) {
            this._vpcOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomain.prototype.resetVpcOptions = function () {
        this._vpcOptions = undefined;
    };
    Object.defineProperty(ElasticsearchDomain.prototype, "vpcOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcOptions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticsearchDomain.prototype.synthesizeAttributes = function () {
        return {
            access_policies: cdktf.stringToTerraform(this._accessPolicies),
            advanced_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._advancedOptions),
            domain_name: cdktf.stringToTerraform(this._domainName),
            elasticsearch_version: cdktf.stringToTerraform(this._elasticsearchVersion),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            advanced_security_options: cdktf.listMapper(elasticsearchDomainAdvancedSecurityOptionsToTerraform)(this._advancedSecurityOptions),
            cluster_config: cdktf.listMapper(elasticsearchDomainClusterConfigToTerraform)(this._clusterConfig),
            cognito_options: cdktf.listMapper(elasticsearchDomainCognitoOptionsToTerraform)(this._cognitoOptions),
            domain_endpoint_options: cdktf.listMapper(elasticsearchDomainDomainEndpointOptionsToTerraform)(this._domainEndpointOptions),
            ebs_options: cdktf.listMapper(elasticsearchDomainEbsOptionsToTerraform)(this._ebsOptions),
            encrypt_at_rest: cdktf.listMapper(elasticsearchDomainEncryptAtRestToTerraform)(this._encryptAtRest),
            log_publishing_options: cdktf.listMapper(elasticsearchDomainLogPublishingOptionsToTerraform)(this._logPublishingOptions),
            node_to_node_encryption: cdktf.listMapper(elasticsearchDomainNodeToNodeEncryptionToTerraform)(this._nodeToNodeEncryption),
            snapshot_options: cdktf.listMapper(elasticsearchDomainSnapshotOptionsToTerraform)(this._snapshotOptions),
            timeouts: elasticsearchDomainTimeoutsToTerraform(this._timeouts),
            vpc_options: cdktf.listMapper(elasticsearchDomainVpcOptionsToTerraform)(this._vpcOptions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticsearchDomain.tfResourceType = "aws_elasticsearch_domain";
    return ElasticsearchDomain;
}(cdktf.TerraformResource));
exports.ElasticsearchDomain = ElasticsearchDomain;

"use strict";
// https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html
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
exports.DataAwsImagebuilderInfrastructureConfiguration = exports.DataAwsImagebuilderInfrastructureConfigurationLogging = exports.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs = void 0;
var cdktf = require("cdktf");
var DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs, _super);
    function DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs.prototype, "s3BucketName", {
        // s3_bucket_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('s3_bucket_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs.prototype, "s3KeyPrefix", {
        // s3_key_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('s3_key_prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs = DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs;
var DataAwsImagebuilderInfrastructureConfigurationLogging = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderInfrastructureConfigurationLogging, _super);
    function DataAwsImagebuilderInfrastructureConfigurationLogging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfigurationLogging.prototype, "s3Logs", {
        // s3_logs - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('s3_logs');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderInfrastructureConfigurationLogging;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderInfrastructureConfigurationLogging = DataAwsImagebuilderInfrastructureConfigurationLogging;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration}
*/
var DataAwsImagebuilderInfrastructureConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderInfrastructureConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderInfrastructureConfigurationConfig
    */
    function DataAwsImagebuilderInfrastructureConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_imagebuilder_infrastructure_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arn = config.arn;
        _this._resourceTags = config.resourceTags;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "dateUpdated", {
        // date_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "instanceProfileName", {
        // instance_profile_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_profile_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "instanceTypes", {
        // instance_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('instance_types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "keyPair", {
        // key_pair - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_pair');
        },
        enumerable: false,
        configurable: true
    });
    // logging - computed: true, optional: false, required: false
    DataAwsImagebuilderInfrastructureConfiguration.prototype.logging = function (index) {
        return new DataAwsImagebuilderInfrastructureConfigurationLogging(this, 'logging', index);
    };
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "resourceTags", {
        get: function () {
            return this.interpolationForAttribute('resource_tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._resourceTags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsImagebuilderInfrastructureConfiguration.prototype.resetResourceTags = function () {
        this._resourceTags = undefined;
    };
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "resourceTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "securityGroupIds", {
        // security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "snsTopicArn", {
        // sns_topic_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sns_topic_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsImagebuilderInfrastructureConfiguration.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderInfrastructureConfiguration.prototype, "terminateInstanceOnFailure", {
        // terminate_instance_on_failure - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('terminate_instance_on_failure');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsImagebuilderInfrastructureConfiguration.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsImagebuilderInfrastructureConfiguration.tfResourceType = "aws_imagebuilder_infrastructure_configuration";
    return DataAwsImagebuilderInfrastructureConfiguration;
}(cdktf.TerraformDataSource));
exports.DataAwsImagebuilderInfrastructureConfiguration = DataAwsImagebuilderInfrastructureConfiguration;

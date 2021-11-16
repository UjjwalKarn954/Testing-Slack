"use strict";
// https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html
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
exports.ImagebuilderInfrastructureConfiguration = void 0;
var cdktf = require("cdktf");
function imagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_bucket_name: cdktf.stringToTerraform(struct.s3BucketName),
        s3_key_prefix: cdktf.stringToTerraform(struct.s3KeyPrefix)
    };
}
function imagebuilderInfrastructureConfigurationLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_logs: cdktf.listMapper(imagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform)(struct.s3Logs)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration}
*/
var ImagebuilderInfrastructureConfiguration = /** @class */ (function (_super) {
    __extends(ImagebuilderInfrastructureConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderInfrastructureConfigurationConfig
    */
    function ImagebuilderInfrastructureConfiguration(scope, id, config) {
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
        _this._description = config.description;
        _this._instanceProfileName = config.instanceProfileName;
        _this._instanceTypes = config.instanceTypes;
        _this._keyPair = config.keyPair;
        _this._name = config.name;
        _this._resourceTags = config.resourceTags;
        _this._securityGroupIds = config.securityGroupIds;
        _this._snsTopicArn = config.snsTopicArn;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._terminateInstanceOnFailure = config.terminateInstanceOnFailure;
        _this._logging = config.logging;
        return _this;
    }
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "arn", {
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
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "dateUpdated", {
        // date_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "instanceProfileName", {
        get: function () {
            return this.getStringAttribute('instance_profile_name');
        },
        set: function (value) {
            this._instanceProfileName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "instanceProfileNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceProfileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "instanceTypes", {
        get: function () {
            return this.getListAttribute('instance_types');
        },
        set: function (value) {
            this._instanceTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetInstanceTypes = function () {
        this._instanceTypes = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "instanceTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "keyPair", {
        get: function () {
            return this.getStringAttribute('key_pair');
        },
        set: function (value) {
            this._keyPair = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetKeyPair = function () {
        this._keyPair = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "keyPairInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyPair;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "resourceTags", {
        get: function () {
            return this.interpolationForAttribute('resource_tags');
        },
        set: function (value) {
            this._resourceTags = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetResourceTags = function () {
        this._resourceTags = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "resourceTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "snsTopicArn", {
        get: function () {
            return this.getStringAttribute('sns_topic_arn');
        },
        set: function (value) {
            this._snsTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetSnsTopicArn = function () {
        this._snsTopicArn = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "snsTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snsTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "terminateInstanceOnFailure", {
        get: function () {
            return this.getBooleanAttribute('terminate_instance_on_failure');
        },
        set: function (value) {
            this._terminateInstanceOnFailure = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetTerminateInstanceOnFailure = function () {
        this._terminateInstanceOnFailure = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "terminateInstanceOnFailureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._terminateInstanceOnFailure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "logging", {
        get: function () {
            return this.interpolationForAttribute('logging');
        },
        set: function (value) {
            this._logging = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderInfrastructureConfiguration.prototype.resetLogging = function () {
        this._logging = undefined;
    };
    Object.defineProperty(ImagebuilderInfrastructureConfiguration.prototype, "loggingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logging;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ImagebuilderInfrastructureConfiguration.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            instance_profile_name: cdktf.stringToTerraform(this._instanceProfileName),
            instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypes),
            key_pair: cdktf.stringToTerraform(this._keyPair),
            name: cdktf.stringToTerraform(this._name),
            resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            terminate_instance_on_failure: cdktf.booleanToTerraform(this._terminateInstanceOnFailure),
            logging: cdktf.listMapper(imagebuilderInfrastructureConfigurationLoggingToTerraform)(this._logging)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ImagebuilderInfrastructureConfiguration.tfResourceType = "aws_imagebuilder_infrastructure_configuration";
    return ImagebuilderInfrastructureConfiguration;
}(cdktf.TerraformResource));
exports.ImagebuilderInfrastructureConfiguration = ImagebuilderInfrastructureConfiguration;

"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html
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
exports.SagemakerFeatureGroup = void 0;
var cdktf = require("cdktf");
function sagemakerFeatureGroupFeatureDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        feature_name: cdktf.stringToTerraform(struct.featureName),
        feature_type: cdktf.stringToTerraform(struct.featureType)
    };
}
function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog: cdktf.stringToTerraform(struct.catalog),
        database: cdktf.stringToTerraform(struct.database),
        table_name: cdktf.stringToTerraform(struct.tableName)
    };
}
function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        s3_uri: cdktf.stringToTerraform(struct.s3Uri)
    };
}
function sagemakerFeatureGroupOfflineStoreConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_glue_table_creation: cdktf.booleanToTerraform(struct.disableGlueTableCreation),
        data_catalog_config: cdktf.listMapper(sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform)(struct.dataCatalogConfig),
        s3_storage_config: cdktf.listMapper(sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform)(struct.s3StorageConfig)
    };
}
function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId)
    };
}
function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_online_store: cdktf.booleanToTerraform(struct.enableOnlineStore),
        security_config: cdktf.listMapper(sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform)(struct.securityConfig)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group}
*/
var SagemakerFeatureGroup = /** @class */ (function (_super) {
    __extends(SagemakerFeatureGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerFeatureGroupConfig
    */
    function SagemakerFeatureGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_feature_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._eventTimeFeatureName = config.eventTimeFeatureName;
        _this._featureGroupName = config.featureGroupName;
        _this._recordIdentifierFeatureName = config.recordIdentifierFeatureName;
        _this._roleArn = config.roleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._featureDefinition = config.featureDefinition;
        _this._offlineStoreConfig = config.offlineStoreConfig;
        _this._onlineStoreConfig = config.onlineStoreConfig;
        return _this;
    }
    Object.defineProperty(SagemakerFeatureGroup.prototype, "arn", {
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
    Object.defineProperty(SagemakerFeatureGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerFeatureGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SagemakerFeatureGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "eventTimeFeatureName", {
        get: function () {
            return this.getStringAttribute('event_time_feature_name');
        },
        set: function (value) {
            this._eventTimeFeatureName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "eventTimeFeatureNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventTimeFeatureName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "featureGroupName", {
        get: function () {
            return this.getStringAttribute('feature_group_name');
        },
        set: function (value) {
            this._featureGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "featureGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._featureGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "recordIdentifierFeatureName", {
        get: function () {
            return this.getStringAttribute('record_identifier_feature_name');
        },
        set: function (value) {
            this._recordIdentifierFeatureName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "recordIdentifierFeatureNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recordIdentifierFeatureName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerFeatureGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerFeatureGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerFeatureGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerFeatureGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "featureDefinition", {
        get: function () {
            return this.interpolationForAttribute('feature_definition');
        },
        set: function (value) {
            this._featureDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "featureDefinitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._featureDefinition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "offlineStoreConfig", {
        get: function () {
            return this.interpolationForAttribute('offline_store_config');
        },
        set: function (value) {
            this._offlineStoreConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerFeatureGroup.prototype.resetOfflineStoreConfig = function () {
        this._offlineStoreConfig = undefined;
    };
    Object.defineProperty(SagemakerFeatureGroup.prototype, "offlineStoreConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._offlineStoreConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFeatureGroup.prototype, "onlineStoreConfig", {
        get: function () {
            return this.interpolationForAttribute('online_store_config');
        },
        set: function (value) {
            this._onlineStoreConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerFeatureGroup.prototype.resetOnlineStoreConfig = function () {
        this._onlineStoreConfig = undefined;
    };
    Object.defineProperty(SagemakerFeatureGroup.prototype, "onlineStoreConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onlineStoreConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerFeatureGroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            event_time_feature_name: cdktf.stringToTerraform(this._eventTimeFeatureName),
            feature_group_name: cdktf.stringToTerraform(this._featureGroupName),
            record_identifier_feature_name: cdktf.stringToTerraform(this._recordIdentifierFeatureName),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            feature_definition: cdktf.listMapper(sagemakerFeatureGroupFeatureDefinitionToTerraform)(this._featureDefinition),
            offline_store_config: cdktf.listMapper(sagemakerFeatureGroupOfflineStoreConfigToTerraform)(this._offlineStoreConfig),
            online_store_config: cdktf.listMapper(sagemakerFeatureGroupOnlineStoreConfigToTerraform)(this._onlineStoreConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerFeatureGroup.tfResourceType = "aws_sagemaker_feature_group";
    return SagemakerFeatureGroup;
}(cdktf.TerraformResource));
exports.SagemakerFeatureGroup = SagemakerFeatureGroup;

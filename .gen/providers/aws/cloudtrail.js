"use strict";
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
exports.CloudTrail = void 0;
var cdktf = require("cdktf");
/**
* AWS CloudTrail
*/
var CloudTrail;
(function (CloudTrail) {
    function cloudtrailAdvancedEventSelectorFieldSelectorToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            ends_with: cdktf.listMapper(cdktf.stringToTerraform)(struct.endsWith),
            equals: cdktf.listMapper(cdktf.stringToTerraform)(struct.equalTo),
            field: cdktf.stringToTerraform(struct.field),
            not_ends_with: cdktf.listMapper(cdktf.stringToTerraform)(struct.notEndsWith),
            not_equals: cdktf.listMapper(cdktf.stringToTerraform)(struct.notEquals),
            not_starts_with: cdktf.listMapper(cdktf.stringToTerraform)(struct.notStartsWith),
            starts_with: cdktf.listMapper(cdktf.stringToTerraform)(struct.startsWith)
        };
    }
    function cloudtrailAdvancedEventSelectorToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            field_selector: cdktf.listMapper(cloudtrailAdvancedEventSelectorFieldSelectorToTerraform)(struct.fieldSelector)
        };
    }
    function cloudtrailEventSelectorDataResourceToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            type: cdktf.stringToTerraform(struct.type),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    function cloudtrailEventSelectorToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            include_management_events: cdktf.booleanToTerraform(struct.includeManagementEvents),
            read_write_type: cdktf.stringToTerraform(struct.readWriteType),
            data_resource: cdktf.listMapper(cloudtrailEventSelectorDataResourceToTerraform)(struct.dataResource)
        };
    }
    function cloudtrailInsightSelectorToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            insight_type: cdktf.stringToTerraform(struct.insightType)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail}
    */
    var Cloudtrail = /** @class */ (function (_super) {
        __extends(Cloudtrail, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options CloudtrailConfig
        */
        function Cloudtrail(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_cloudtrail',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._cloudWatchLogsGroupArn = config.cloudWatchLogsGroupArn;
            _this._cloudWatchLogsRoleArn = config.cloudWatchLogsRoleArn;
            _this._enableLogFileValidation = config.enableLogFileValidation;
            _this._enableLogging = config.enableLogging;
            _this._includeGlobalServiceEvents = config.includeGlobalServiceEvents;
            _this._isMultiRegionTrail = config.isMultiRegionTrail;
            _this._isOrganizationTrail = config.isOrganizationTrail;
            _this._kmsKeyId = config.kmsKeyId;
            _this._name = config.name;
            _this._s3BucketName = config.s3BucketName;
            _this._s3KeyPrefix = config.s3KeyPrefix;
            _this._snsTopicName = config.snsTopicName;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._advancedEventSelector = config.advancedEventSelector;
            _this._eventSelector = config.eventSelector;
            _this._insightSelector = config.insightSelector;
            return _this;
        }
        Object.defineProperty(Cloudtrail.prototype, "arn", {
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
        Object.defineProperty(Cloudtrail.prototype, "cloudWatchLogsGroupArn", {
            get: function () {
                return this.getStringAttribute('cloud_watch_logs_group_arn');
            },
            set: function (value) {
                this._cloudWatchLogsGroupArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetCloudWatchLogsGroupArn = function () {
            this._cloudWatchLogsGroupArn = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "cloudWatchLogsGroupArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cloudWatchLogsGroupArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "cloudWatchLogsRoleArn", {
            get: function () {
                return this.getStringAttribute('cloud_watch_logs_role_arn');
            },
            set: function (value) {
                this._cloudWatchLogsRoleArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetCloudWatchLogsRoleArn = function () {
            this._cloudWatchLogsRoleArn = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "cloudWatchLogsRoleArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cloudWatchLogsRoleArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "enableLogFileValidation", {
            get: function () {
                return this.getBooleanAttribute('enable_log_file_validation');
            },
            set: function (value) {
                this._enableLogFileValidation = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetEnableLogFileValidation = function () {
            this._enableLogFileValidation = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "enableLogFileValidationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableLogFileValidation;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "enableLogging", {
            get: function () {
                return this.getBooleanAttribute('enable_logging');
            },
            set: function (value) {
                this._enableLogging = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetEnableLogging = function () {
            this._enableLogging = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "enableLoggingInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableLogging;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "homeRegion", {
            // home_region - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('home_region');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "includeGlobalServiceEvents", {
            get: function () {
                return this.getBooleanAttribute('include_global_service_events');
            },
            set: function (value) {
                this._includeGlobalServiceEvents = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetIncludeGlobalServiceEvents = function () {
            this._includeGlobalServiceEvents = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "includeGlobalServiceEventsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._includeGlobalServiceEvents;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "isMultiRegionTrail", {
            get: function () {
                return this.getBooleanAttribute('is_multi_region_trail');
            },
            set: function (value) {
                this._isMultiRegionTrail = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetIsMultiRegionTrail = function () {
            this._isMultiRegionTrail = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "isMultiRegionTrailInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._isMultiRegionTrail;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "isOrganizationTrail", {
            get: function () {
                return this.getBooleanAttribute('is_organization_trail');
            },
            set: function (value) {
                this._isOrganizationTrail = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetIsOrganizationTrail = function () {
            this._isOrganizationTrail = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "isOrganizationTrailInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._isOrganizationTrail;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "kmsKeyId", {
            get: function () {
                return this.getStringAttribute('kms_key_id');
            },
            set: function (value) {
                this._kmsKeyId = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetKmsKeyId = function () {
            this._kmsKeyId = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "kmsKeyIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._kmsKeyId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "s3BucketName", {
            get: function () {
                return this.getStringAttribute('s3_bucket_name');
            },
            set: function (value) {
                this._s3BucketName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "s3BucketNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._s3BucketName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "s3KeyPrefix", {
            get: function () {
                return this.getStringAttribute('s3_key_prefix');
            },
            set: function (value) {
                this._s3KeyPrefix = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetS3KeyPrefix = function () {
            this._s3KeyPrefix = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "s3KeyPrefixInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._s3KeyPrefix;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "snsTopicName", {
            get: function () {
                return this.getStringAttribute('sns_topic_name');
            },
            set: function (value) {
                this._snsTopicName = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetSnsTopicName = function () {
            this._snsTopicName = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "snsTopicNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._snsTopicName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "advancedEventSelector", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('advanced_event_selector');
            },
            set: function (value) {
                this._advancedEventSelector = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetAdvancedEventSelector = function () {
            this._advancedEventSelector = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "advancedEventSelectorInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._advancedEventSelector;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "eventSelector", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('event_selector');
            },
            set: function (value) {
                this._eventSelector = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetEventSelector = function () {
            this._eventSelector = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "eventSelectorInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._eventSelector;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Cloudtrail.prototype, "insightSelector", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('insight_selector');
            },
            set: function (value) {
                this._insightSelector = value;
            },
            enumerable: false,
            configurable: true
        });
        Cloudtrail.prototype.resetInsightSelector = function () {
            this._insightSelector = undefined;
        };
        Object.defineProperty(Cloudtrail.prototype, "insightSelectorInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._insightSelector;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        Cloudtrail.prototype.synthesizeAttributes = function () {
            return {
                cloud_watch_logs_group_arn: cdktf.stringToTerraform(this._cloudWatchLogsGroupArn),
                cloud_watch_logs_role_arn: cdktf.stringToTerraform(this._cloudWatchLogsRoleArn),
                enable_log_file_validation: cdktf.booleanToTerraform(this._enableLogFileValidation),
                enable_logging: cdktf.booleanToTerraform(this._enableLogging),
                include_global_service_events: cdktf.booleanToTerraform(this._includeGlobalServiceEvents),
                is_multi_region_trail: cdktf.booleanToTerraform(this._isMultiRegionTrail),
                is_organization_trail: cdktf.booleanToTerraform(this._isOrganizationTrail),
                kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
                name: cdktf.stringToTerraform(this._name),
                s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
                s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
                sns_topic_name: cdktf.stringToTerraform(this._snsTopicName),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                advanced_event_selector: cdktf.listMapper(cloudtrailAdvancedEventSelectorToTerraform)(this._advancedEventSelector),
                event_selector: cdktf.listMapper(cloudtrailEventSelectorToTerraform)(this._eventSelector),
                insight_selector: cdktf.listMapper(cloudtrailInsightSelectorToTerraform)(this._insightSelector)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        Cloudtrail.tfResourceType = "aws_cloudtrail";
        return Cloudtrail;
    }(cdktf.TerraformResource));
    CloudTrail.Cloudtrail = Cloudtrail;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudtrail_service_account.html aws_cloudtrail_service_account}
    */
    var DataAwsCloudtrailServiceAccount = /** @class */ (function (_super) {
        __extends(DataAwsCloudtrailServiceAccount, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudtrail_service_account.html aws_cloudtrail_service_account} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsCloudtrailServiceAccountConfig = {}
        */
        function DataAwsCloudtrailServiceAccount(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_cloudtrail_service_account',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._region = config.region;
            return _this;
        }
        Object.defineProperty(DataAwsCloudtrailServiceAccount.prototype, "arn", {
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
        Object.defineProperty(DataAwsCloudtrailServiceAccount.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsCloudtrailServiceAccount.prototype, "region", {
            get: function () {
                return this.getStringAttribute('region');
            },
            set: function (value) {
                this._region = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsCloudtrailServiceAccount.prototype.resetRegion = function () {
            this._region = undefined;
        };
        Object.defineProperty(DataAwsCloudtrailServiceAccount.prototype, "regionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._region;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsCloudtrailServiceAccount.prototype.synthesizeAttributes = function () {
            return {
                region: cdktf.stringToTerraform(this._region)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsCloudtrailServiceAccount.tfResourceType = "aws_cloudtrail_service_account";
        return DataAwsCloudtrailServiceAccount;
    }(cdktf.TerraformDataSource));
    CloudTrail.DataAwsCloudtrailServiceAccount = DataAwsCloudtrailServiceAccount;
})(CloudTrail = exports.CloudTrail || (exports.CloudTrail = {}));

"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html
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
exports.ServicecatalogProvisionedProduct = void 0;
var cdktf = require("cdktf");
function servicecatalogProvisionedProductProvisioningParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        use_previous_value: cdktf.booleanToTerraform(struct.usePreviousValue),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct.accounts),
        failure_tolerance_count: cdktf.numberToTerraform(struct.failureToleranceCount),
        failure_tolerance_percentage: cdktf.numberToTerraform(struct.failureTolerancePercentage),
        max_concurrency_count: cdktf.numberToTerraform(struct.maxConcurrencyCount),
        max_concurrency_percentage: cdktf.numberToTerraform(struct.maxConcurrencyPercentage),
        regions: cdktf.listMapper(cdktf.stringToTerraform)(struct.regions)
    };
}
function servicecatalogProvisionedProductTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product}
*/
var ServicecatalogProvisionedProduct = /** @class */ (function (_super) {
    __extends(ServicecatalogProvisionedProduct, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProvisionedProductConfig
    */
    function ServicecatalogProvisionedProduct(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_provisioned_product',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._acceptLanguage = config.acceptLanguage;
        _this._ignoreErrors = config.ignoreErrors;
        _this._name = config.name;
        _this._notificationArns = config.notificationArns;
        _this._pathId = config.pathId;
        _this._pathName = config.pathName;
        _this._productId = config.productId;
        _this._productName = config.productName;
        _this._provisioningArtifactId = config.provisioningArtifactId;
        _this._provisioningArtifactName = config.provisioningArtifactName;
        _this._retainPhysicalResources = config.retainPhysicalResources;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._provisioningParameters = config.provisioningParameters;
        _this._stackSetProvisioningPreferences = config.stackSetProvisioningPreferences;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "cloudwatchDashboardNames", {
        // cloudwatch_dashboard_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('cloudwatch_dashboard_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "ignoreErrors", {
        get: function () {
            return this.getBooleanAttribute('ignore_errors');
        },
        set: function (value) {
            this._ignoreErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetIgnoreErrors = function () {
        this._ignoreErrors = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "ignoreErrorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "lastProvisioningRecordId", {
        // last_provisioning_record_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_provisioning_record_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "lastRecordId", {
        // last_record_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_record_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "lastSuccessfulProvisioningRecordId", {
        // last_successful_provisioning_record_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_successful_provisioning_record_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "launchRoleArn", {
        // launch_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('launch_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "notificationArns", {
        get: function () {
            return this.getListAttribute('notification_arns');
        },
        set: function (value) {
            this._notificationArns = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetNotificationArns = function () {
        this._notificationArns = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "notificationArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "pathId", {
        get: function () {
            return this.getStringAttribute('path_id');
        },
        set: function (value) {
            this._pathId = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetPathId = function () {
        this._pathId = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "pathIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pathId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "pathName", {
        get: function () {
            return this.getStringAttribute('path_name');
        },
        set: function (value) {
            this._pathName = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetPathName = function () {
        this._pathName = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "pathNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pathName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "productId", {
        get: function () {
            return this.getStringAttribute('product_id');
        },
        set: function (value) {
            this._productId = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetProductId = function () {
        this._productId = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "productIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "productName", {
        get: function () {
            return this.getStringAttribute('product_name');
        },
        set: function (value) {
            this._productName = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetProductName = function () {
        this._productName = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "productNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "provisioningArtifactId", {
        get: function () {
            return this.getStringAttribute('provisioning_artifact_id');
        },
        set: function (value) {
            this._provisioningArtifactId = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetProvisioningArtifactId = function () {
        this._provisioningArtifactId = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "provisioningArtifactIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provisioningArtifactId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "provisioningArtifactName", {
        get: function () {
            return this.getStringAttribute('provisioning_artifact_name');
        },
        set: function (value) {
            this._provisioningArtifactName = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetProvisioningArtifactName = function () {
        this._provisioningArtifactName = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "provisioningArtifactNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provisioningArtifactName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "retainPhysicalResources", {
        get: function () {
            return this.getBooleanAttribute('retain_physical_resources');
        },
        set: function (value) {
            this._retainPhysicalResources = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetRetainPhysicalResources = function () {
        this._retainPhysicalResources = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "retainPhysicalResourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retainPhysicalResources;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "statusMessage", {
        // status_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "provisioningParameters", {
        get: function () {
            return this.interpolationForAttribute('provisioning_parameters');
        },
        set: function (value) {
            this._provisioningParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetProvisioningParameters = function () {
        this._provisioningParameters = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "provisioningParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provisioningParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "stackSetProvisioningPreferences", {
        get: function () {
            return this.interpolationForAttribute('stack_set_provisioning_preferences');
        },
        set: function (value) {
            this._stackSetProvisioningPreferences = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetStackSetProvisioningPreferences = function () {
        this._stackSetProvisioningPreferences = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "stackSetProvisioningPreferencesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stackSetProvisioningPreferences;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisionedProduct.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(ServicecatalogProvisionedProduct.prototype, "timeoutsInput", {
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
    ServicecatalogProvisionedProduct.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
            name: cdktf.stringToTerraform(this._name),
            notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
            path_id: cdktf.stringToTerraform(this._pathId),
            path_name: cdktf.stringToTerraform(this._pathName),
            product_id: cdktf.stringToTerraform(this._productId),
            product_name: cdktf.stringToTerraform(this._productName),
            provisioning_artifact_id: cdktf.stringToTerraform(this._provisioningArtifactId),
            provisioning_artifact_name: cdktf.stringToTerraform(this._provisioningArtifactName),
            retain_physical_resources: cdktf.booleanToTerraform(this._retainPhysicalResources),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            provisioning_parameters: cdktf.listMapper(servicecatalogProvisionedProductProvisioningParametersToTerraform)(this._provisioningParameters),
            stack_set_provisioning_preferences: cdktf.listMapper(servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform)(this._stackSetProvisioningPreferences),
            timeouts: servicecatalogProvisionedProductTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogProvisionedProduct.tfResourceType = "aws_servicecatalog_provisioned_product";
    return ServicecatalogProvisionedProduct;
}(cdktf.TerraformResource));
exports.ServicecatalogProvisionedProduct = ServicecatalogProvisionedProduct;

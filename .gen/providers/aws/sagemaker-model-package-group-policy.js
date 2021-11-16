"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html
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
exports.SagemakerModelPackageGroupPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html aws_sagemaker_model_package_group_policy}
*/
var SagemakerModelPackageGroupPolicy = /** @class */ (function (_super) {
    __extends(SagemakerModelPackageGroupPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html aws_sagemaker_model_package_group_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelPackageGroupPolicyConfig
    */
    function SagemakerModelPackageGroupPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_model_package_group_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._modelPackageGroupName = config.modelPackageGroupName;
        _this._resourcePolicy = config.resourcePolicy;
        return _this;
    }
    Object.defineProperty(SagemakerModelPackageGroupPolicy.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModelPackageGroupPolicy.prototype, "modelPackageGroupName", {
        get: function () {
            return this.getStringAttribute('model_package_group_name');
        },
        set: function (value) {
            this._modelPackageGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModelPackageGroupPolicy.prototype, "modelPackageGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modelPackageGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModelPackageGroupPolicy.prototype, "resourcePolicy", {
        get: function () {
            return this.getStringAttribute('resource_policy');
        },
        set: function (value) {
            this._resourcePolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModelPackageGroupPolicy.prototype, "resourcePolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourcePolicy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerModelPackageGroupPolicy.prototype.synthesizeAttributes = function () {
        return {
            model_package_group_name: cdktf.stringToTerraform(this._modelPackageGroupName),
            resource_policy: cdktf.stringToTerraform(this._resourcePolicy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerModelPackageGroupPolicy.tfResourceType = "aws_sagemaker_model_package_group_policy";
    return SagemakerModelPackageGroupPolicy;
}(cdktf.TerraformResource));
exports.SagemakerModelPackageGroupPolicy = SagemakerModelPackageGroupPolicy;

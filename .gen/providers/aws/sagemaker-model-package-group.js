"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html
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
exports.SagemakerModelPackageGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html aws_sagemaker_model_package_group}
*/
var SagemakerModelPackageGroup = /** @class */ (function (_super) {
    __extends(SagemakerModelPackageGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html aws_sagemaker_model_package_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelPackageGroupConfig
    */
    function SagemakerModelPackageGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_model_package_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._modelPackageGroupDescription = config.modelPackageGroupDescription;
        _this._modelPackageGroupName = config.modelPackageGroupName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "arn", {
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
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "modelPackageGroupDescription", {
        get: function () {
            return this.getStringAttribute('model_package_group_description');
        },
        set: function (value) {
            this._modelPackageGroupDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModelPackageGroup.prototype.resetModelPackageGroupDescription = function () {
        this._modelPackageGroupDescription = undefined;
    };
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "modelPackageGroupDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modelPackageGroupDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "modelPackageGroupName", {
        get: function () {
            return this.getStringAttribute('model_package_group_name');
        },
        set: function (value) {
            this._modelPackageGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "modelPackageGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modelPackageGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModelPackageGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModelPackageGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerModelPackageGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerModelPackageGroup.prototype.synthesizeAttributes = function () {
        return {
            model_package_group_description: cdktf.stringToTerraform(this._modelPackageGroupDescription),
            model_package_group_name: cdktf.stringToTerraform(this._modelPackageGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerModelPackageGroup.tfResourceType = "aws_sagemaker_model_package_group";
    return SagemakerModelPackageGroup;
}(cdktf.TerraformResource));
exports.SagemakerModelPackageGroup = SagemakerModelPackageGroup;

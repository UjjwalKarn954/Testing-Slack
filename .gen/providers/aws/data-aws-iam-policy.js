"use strict";
// https://www.terraform.io/docs/providers/aws/d/iam_policy.html
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
exports.DataAwsIamPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_policy.html aws_iam_policy}
*/
var DataAwsIamPolicy = /** @class */ (function (_super) {
    __extends(DataAwsIamPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_policy.html aws_iam_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamPolicyConfig = {}
    */
    function DataAwsIamPolicy(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._pathPrefix = config.pathPrefix;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsIamPolicy.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicy.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicy.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsIamPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicy.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicy.prototype, "pathPrefix", {
        get: function () {
            return this.getStringAttribute('path_prefix');
        },
        set: function (value) {
            this._pathPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicy.prototype.resetPathPrefix = function () {
        this._pathPrefix = undefined;
    };
    Object.defineProperty(DataAwsIamPolicy.prototype, "pathPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pathPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicy.prototype, "policy", {
        // policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicy.prototype, "policyId", {
        // policy_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicy.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicy.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsIamPolicy.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsIamPolicy.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            path_prefix: cdktf.stringToTerraform(this._pathPrefix),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIamPolicy.tfResourceType = "aws_iam_policy";
    return DataAwsIamPolicy;
}(cdktf.TerraformDataSource));
exports.DataAwsIamPolicy = DataAwsIamPolicy;
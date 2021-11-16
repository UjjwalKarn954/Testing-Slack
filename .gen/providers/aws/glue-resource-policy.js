"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html
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
exports.GlueResourcePolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html aws_glue_resource_policy}
*/
var GlueResourcePolicy = /** @class */ (function (_super) {
    __extends(GlueResourcePolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html aws_glue_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueResourcePolicyConfig
    */
    function GlueResourcePolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_resource_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._enableHybrid = config.enableHybrid;
        _this._policy = config.policy;
        return _this;
    }
    Object.defineProperty(GlueResourcePolicy.prototype, "enableHybrid", {
        get: function () {
            return this.getStringAttribute('enable_hybrid');
        },
        set: function (value) {
            this._enableHybrid = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueResourcePolicy.prototype.resetEnableHybrid = function () {
        this._enableHybrid = undefined;
    };
    Object.defineProperty(GlueResourcePolicy.prototype, "enableHybridInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableHybrid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueResourcePolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueResourcePolicy.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueResourcePolicy.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueResourcePolicy.prototype.synthesizeAttributes = function () {
        return {
            enable_hybrid: cdktf.stringToTerraform(this._enableHybrid),
            policy: cdktf.stringToTerraform(this._policy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueResourcePolicy.tfResourceType = "aws_glue_resource_policy";
    return GlueResourcePolicy;
}(cdktf.TerraformResource));
exports.GlueResourcePolicy = GlueResourcePolicy;

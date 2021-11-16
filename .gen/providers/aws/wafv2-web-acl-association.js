"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_association.html
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
exports.Wafv2WebAclAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_association.html aws_wafv2_web_acl_association}
*/
var Wafv2WebAclAssociation = /** @class */ (function (_super) {
    __extends(Wafv2WebAclAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_association.html aws_wafv2_web_acl_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2WebAclAssociationConfig
    */
    function Wafv2WebAclAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafv2_web_acl_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._resourceArn = config.resourceArn;
        _this._webAclArn = config.webAclArn;
        return _this;
    }
    Object.defineProperty(Wafv2WebAclAssociation.prototype, "id", {
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
    Object.defineProperty(Wafv2WebAclAssociation.prototype, "resourceArn", {
        get: function () {
            return this.getStringAttribute('resource_arn');
        },
        set: function (value) {
            this._resourceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2WebAclAssociation.prototype, "resourceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2WebAclAssociation.prototype, "webAclArn", {
        get: function () {
            return this.getStringAttribute('web_acl_arn');
        },
        set: function (value) {
            this._webAclArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2WebAclAssociation.prototype, "webAclArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webAclArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Wafv2WebAclAssociation.prototype.synthesizeAttributes = function () {
        return {
            resource_arn: cdktf.stringToTerraform(this._resourceArn),
            web_acl_arn: cdktf.stringToTerraform(this._webAclArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Wafv2WebAclAssociation.tfResourceType = "aws_wafv2_web_acl_association";
    return Wafv2WebAclAssociation;
}(cdktf.TerraformResource));
exports.Wafv2WebAclAssociation = Wafv2WebAclAssociation;

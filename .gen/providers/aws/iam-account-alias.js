"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html
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
exports.IamAccountAlias = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html aws_iam_account_alias}
*/
var IamAccountAlias = /** @class */ (function (_super) {
    __extends(IamAccountAlias, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html aws_iam_account_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccountAliasConfig
    */
    function IamAccountAlias(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_account_alias',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountAlias = config.accountAlias;
        return _this;
    }
    Object.defineProperty(IamAccountAlias.prototype, "accountAlias", {
        get: function () {
            return this.getStringAttribute('account_alias');
        },
        set: function (value) {
            this._accountAlias = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountAlias.prototype, "accountAliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountAlias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountAlias.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamAccountAlias.prototype.synthesizeAttributes = function () {
        return {
            account_alias: cdktf.stringToTerraform(this._accountAlias)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamAccountAlias.tfResourceType = "aws_iam_account_alias";
    return IamAccountAlias;
}(cdktf.TerraformResource));
exports.IamAccountAlias = IamAccountAlias;

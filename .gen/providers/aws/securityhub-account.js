"use strict";
// https://www.terraform.io/docs/providers/aws/r/securityhub_account.html
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
exports.SecurityhubAccount = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_account.html aws_securityhub_account}
*/
var SecurityhubAccount = /** @class */ (function (_super) {
    __extends(SecurityhubAccount, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_account.html aws_securityhub_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubAccountConfig = {}
    */
    function SecurityhubAccount(scope, id, config) {
        if (config === void 0) { config = {}; }
        return _super.call(this, scope, id, {
            terraformResourceType: 'aws_securityhub_account',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
    }
    Object.defineProperty(SecurityhubAccount.prototype, "id", {
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
    // =========
    // SYNTHESIS
    // =========
    SecurityhubAccount.prototype.synthesizeAttributes = function () {
        return {};
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityhubAccount.tfResourceType = "aws_securityhub_account";
    return SecurityhubAccount;
}(cdktf.TerraformResource));
exports.SecurityhubAccount = SecurityhubAccount;

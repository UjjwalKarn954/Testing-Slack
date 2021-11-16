"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html
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
exports.SesDomainIdentity = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html aws_ses_domain_identity}
*/
var SesDomainIdentity = /** @class */ (function (_super) {
    __extends(SesDomainIdentity, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html aws_ses_domain_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainIdentityConfig
    */
    function SesDomainIdentity(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_domain_identity',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domain = config.domain;
        return _this;
    }
    Object.defineProperty(SesDomainIdentity.prototype, "arn", {
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
    Object.defineProperty(SesDomainIdentity.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainIdentity.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainIdentity.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainIdentity.prototype, "verificationToken", {
        // verification_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('verification_token');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SesDomainIdentity.prototype.synthesizeAttributes = function () {
        return {
            domain: cdktf.stringToTerraform(this._domain)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesDomainIdentity.tfResourceType = "aws_ses_domain_identity";
    return SesDomainIdentity;
}(cdktf.TerraformResource));
exports.SesDomainIdentity = SesDomainIdentity;

"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html
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
exports.SesDomainDkim = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html aws_ses_domain_dkim}
*/
var SesDomainDkim = /** @class */ (function (_super) {
    __extends(SesDomainDkim, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html aws_ses_domain_dkim} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainDkimConfig
    */
    function SesDomainDkim(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_domain_dkim',
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
    Object.defineProperty(SesDomainDkim.prototype, "dkimTokens", {
        // ==========
        // ATTRIBUTES
        // ==========
        // dkim_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dkim_tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainDkim.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainDkim.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainDkim.prototype, "id", {
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
    SesDomainDkim.prototype.synthesizeAttributes = function () {
        return {
            domain: cdktf.stringToTerraform(this._domain)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesDomainDkim.tfResourceType = "aws_ses_domain_dkim";
    return SesDomainDkim;
}(cdktf.TerraformResource));
exports.SesDomainDkim = SesDomainDkim;

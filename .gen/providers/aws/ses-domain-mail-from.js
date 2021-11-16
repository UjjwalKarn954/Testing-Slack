"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html
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
exports.SesDomainMailFrom = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html aws_ses_domain_mail_from}
*/
var SesDomainMailFrom = /** @class */ (function (_super) {
    __extends(SesDomainMailFrom, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html aws_ses_domain_mail_from} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainMailFromConfig
    */
    function SesDomainMailFrom(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_domain_mail_from',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._behaviorOnMxFailure = config.behaviorOnMxFailure;
        _this._domain = config.domain;
        _this._mailFromDomain = config.mailFromDomain;
        return _this;
    }
    Object.defineProperty(SesDomainMailFrom.prototype, "behaviorOnMxFailure", {
        get: function () {
            return this.getStringAttribute('behavior_on_mx_failure');
        },
        set: function (value) {
            this._behaviorOnMxFailure = value;
        },
        enumerable: false,
        configurable: true
    });
    SesDomainMailFrom.prototype.resetBehaviorOnMxFailure = function () {
        this._behaviorOnMxFailure = undefined;
    };
    Object.defineProperty(SesDomainMailFrom.prototype, "behaviorOnMxFailureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._behaviorOnMxFailure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainMailFrom.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainMailFrom.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainMailFrom.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainMailFrom.prototype, "mailFromDomain", {
        get: function () {
            return this.getStringAttribute('mail_from_domain');
        },
        set: function (value) {
            this._mailFromDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesDomainMailFrom.prototype, "mailFromDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mailFromDomain;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SesDomainMailFrom.prototype.synthesizeAttributes = function () {
        return {
            behavior_on_mx_failure: cdktf.stringToTerraform(this._behaviorOnMxFailure),
            domain: cdktf.stringToTerraform(this._domain),
            mail_from_domain: cdktf.stringToTerraform(this._mailFromDomain)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesDomainMailFrom.tfResourceType = "aws_ses_domain_mail_from";
    return SesDomainMailFrom;
}(cdktf.TerraformResource));
exports.SesDomainMailFrom = SesDomainMailFrom;

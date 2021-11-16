"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html
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
exports.Route53HostedZoneDnssec = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html aws_route53_hosted_zone_dnssec}
*/
var Route53HostedZoneDnssec = /** @class */ (function (_super) {
    __extends(Route53HostedZoneDnssec, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html aws_route53_hosted_zone_dnssec} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HostedZoneDnssecConfig
    */
    function Route53HostedZoneDnssec(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_hosted_zone_dnssec',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._hostedZoneId = config.hostedZoneId;
        _this._signingStatus = config.signingStatus;
        return _this;
    }
    Object.defineProperty(Route53HostedZoneDnssec.prototype, "hostedZoneId", {
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        set: function (value) {
            this._hostedZoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HostedZoneDnssec.prototype, "hostedZoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostedZoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HostedZoneDnssec.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53HostedZoneDnssec.prototype, "signingStatus", {
        get: function () {
            return this.getStringAttribute('signing_status');
        },
        set: function (value) {
            this._signingStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53HostedZoneDnssec.prototype.resetSigningStatus = function () {
        this._signingStatus = undefined;
    };
    Object.defineProperty(Route53HostedZoneDnssec.prototype, "signingStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._signingStatus;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53HostedZoneDnssec.prototype.synthesizeAttributes = function () {
        return {
            hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
            signing_status: cdktf.stringToTerraform(this._signingStatus)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53HostedZoneDnssec.tfResourceType = "aws_route53_hosted_zone_dnssec";
    return Route53HostedZoneDnssec;
}(cdktf.TerraformResource));
exports.Route53HostedZoneDnssec = Route53HostedZoneDnssec;

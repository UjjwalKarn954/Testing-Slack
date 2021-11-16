"use strict";
// https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html
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
exports.LbListenerCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html aws_lb_listener_certificate}
*/
var LbListenerCertificate = /** @class */ (function (_super) {
    __extends(LbListenerCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html aws_lb_listener_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerCertificateConfig
    */
    function LbListenerCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lb_listener_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificateArn = config.certificateArn;
        _this._listenerArn = config.listenerArn;
        return _this;
    }
    Object.defineProperty(LbListenerCertificate.prototype, "certificateArn", {
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        set: function (value) {
            this._certificateArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbListenerCertificate.prototype, "certificateArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbListenerCertificate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbListenerCertificate.prototype, "listenerArn", {
        get: function () {
            return this.getStringAttribute('listener_arn');
        },
        set: function (value) {
            this._listenerArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbListenerCertificate.prototype, "listenerArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._listenerArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LbListenerCertificate.prototype.synthesizeAttributes = function () {
        return {
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            listener_arn: cdktf.stringToTerraform(this._listenerArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LbListenerCertificate.tfResourceType = "aws_lb_listener_certificate";
    return LbListenerCertificate;
}(cdktf.TerraformResource));
exports.LbListenerCertificate = LbListenerCertificate;

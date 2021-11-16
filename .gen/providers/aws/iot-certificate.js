"use strict";
// https://www.terraform.io/docs/providers/aws/r/iot_certificate.html
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
exports.IotCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html aws_iot_certificate}
*/
var IotCertificate = /** @class */ (function (_super) {
    __extends(IotCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html aws_iot_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotCertificateConfig
    */
    function IotCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iot_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._active = config.active;
        _this._csr = config.csr;
        return _this;
    }
    Object.defineProperty(IotCertificate.prototype, "active", {
        get: function () {
            return this.getBooleanAttribute('active');
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotCertificate.prototype, "activeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotCertificate.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotCertificate.prototype, "certificatePem", {
        // certificate_pem - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_pem');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotCertificate.prototype, "csr", {
        get: function () {
            return this.getStringAttribute('csr');
        },
        set: function (value) {
            this._csr = value;
        },
        enumerable: false,
        configurable: true
    });
    IotCertificate.prototype.resetCsr = function () {
        this._csr = undefined;
    };
    Object.defineProperty(IotCertificate.prototype, "csrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._csr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotCertificate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotCertificate.prototype, "privateKey", {
        // private_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotCertificate.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IotCertificate.prototype.synthesizeAttributes = function () {
        return {
            active: cdktf.booleanToTerraform(this._active),
            csr: cdktf.stringToTerraform(this._csr)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IotCertificate.tfResourceType = "aws_iot_certificate";
    return IotCertificate;
}(cdktf.TerraformResource));
exports.IotCertificate = IotCertificate;

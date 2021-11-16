"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html
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
exports.Route53KeySigningKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html aws_route53_key_signing_key}
*/
var Route53KeySigningKey = /** @class */ (function (_super) {
    __extends(Route53KeySigningKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html aws_route53_key_signing_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53KeySigningKeyConfig
    */
    function Route53KeySigningKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_key_signing_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._hostedZoneId = config.hostedZoneId;
        _this._keyManagementServiceArn = config.keyManagementServiceArn;
        _this._name = config.name;
        _this._status = config.status;
        return _this;
    }
    Object.defineProperty(Route53KeySigningKey.prototype, "digestAlgorithmMnemonic", {
        // ==========
        // ATTRIBUTES
        // ==========
        // digest_algorithm_mnemonic - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest_algorithm_mnemonic');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "digestAlgorithmType", {
        // digest_algorithm_type - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('digest_algorithm_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "digestValue", {
        // digest_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest_value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "dnskeyRecord", {
        // dnskey_record - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dnskey_record');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "dsRecord", {
        // ds_record - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ds_record');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "flag", {
        // flag - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('flag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "hostedZoneId", {
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        set: function (value) {
            this._hostedZoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "hostedZoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostedZoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "keyManagementServiceArn", {
        get: function () {
            return this.getStringAttribute('key_management_service_arn');
        },
        set: function (value) {
            this._keyManagementServiceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "keyManagementServiceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyManagementServiceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "keyTag", {
        // key_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('key_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "signingAlgorithmMnemonic", {
        // signing_algorithm_mnemonic - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signing_algorithm_mnemonic');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "signingAlgorithmType", {
        // signing_algorithm_type - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('signing_algorithm_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53KeySigningKey.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53KeySigningKey.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(Route53KeySigningKey.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53KeySigningKey.prototype.synthesizeAttributes = function () {
        return {
            hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
            key_management_service_arn: cdktf.stringToTerraform(this._keyManagementServiceArn),
            name: cdktf.stringToTerraform(this._name),
            status: cdktf.stringToTerraform(this._status)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53KeySigningKey.tfResourceType = "aws_route53_key_signing_key";
    return Route53KeySigningKey;
}(cdktf.TerraformResource));
exports.Route53KeySigningKey = Route53KeySigningKey;

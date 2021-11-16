"use strict";
// https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html
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
exports.LightsailKeyPair = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html aws_lightsail_key_pair}
*/
var LightsailKeyPair = /** @class */ (function (_super) {
    __extends(LightsailKeyPair, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html aws_lightsail_key_pair} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailKeyPairConfig = {}
    */
    function LightsailKeyPair(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lightsail_key_pair',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._pgpKey = config.pgpKey;
        _this._publicKey = config.publicKey;
        return _this;
    }
    Object.defineProperty(LightsailKeyPair.prototype, "arn", {
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
    Object.defineProperty(LightsailKeyPair.prototype, "encryptedFingerprint", {
        // encrypted_fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('encrypted_fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailKeyPair.prototype, "encryptedPrivateKey", {
        // encrypted_private_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('encrypted_private_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailKeyPair.prototype, "fingerprint", {
        // fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailKeyPair.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailKeyPair.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    LightsailKeyPair.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(LightsailKeyPair.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailKeyPair.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    LightsailKeyPair.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(LightsailKeyPair.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailKeyPair.prototype, "pgpKey", {
        get: function () {
            return this.getStringAttribute('pgp_key');
        },
        set: function (value) {
            this._pgpKey = value;
        },
        enumerable: false,
        configurable: true
    });
    LightsailKeyPair.prototype.resetPgpKey = function () {
        this._pgpKey = undefined;
    };
    Object.defineProperty(LightsailKeyPair.prototype, "pgpKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pgpKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailKeyPair.prototype, "privateKey", {
        // private_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailKeyPair.prototype, "publicKey", {
        get: function () {
            return this.getStringAttribute('public_key');
        },
        set: function (value) {
            this._publicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    LightsailKeyPair.prototype.resetPublicKey = function () {
        this._publicKey = undefined;
    };
    Object.defineProperty(LightsailKeyPair.prototype, "publicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicKey;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LightsailKeyPair.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            pgp_key: cdktf.stringToTerraform(this._pgpKey),
            public_key: cdktf.stringToTerraform(this._publicKey)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LightsailKeyPair.tfResourceType = "aws_lightsail_key_pair";
    return LightsailKeyPair;
}(cdktf.TerraformResource));
exports.LightsailKeyPair = LightsailKeyPair;

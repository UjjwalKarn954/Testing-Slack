"use strict";
// https://www.terraform.io/docs/providers/aws/r/key_pair.html
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
exports.KeyPair = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html aws_key_pair}
*/
var KeyPair = /** @class */ (function (_super) {
    __extends(KeyPair, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html aws_key_pair} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KeyPairConfig
    */
    function KeyPair(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_key_pair',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._keyName = config.keyName;
        _this._keyNamePrefix = config.keyNamePrefix;
        _this._publicKey = config.publicKey;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(KeyPair.prototype, "arn", {
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
    Object.defineProperty(KeyPair.prototype, "fingerprint", {
        // fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyPair.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyPair.prototype, "keyName", {
        get: function () {
            return this.getStringAttribute('key_name');
        },
        set: function (value) {
            this._keyName = value;
        },
        enumerable: false,
        configurable: true
    });
    KeyPair.prototype.resetKeyName = function () {
        this._keyName = undefined;
    };
    Object.defineProperty(KeyPair.prototype, "keyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyPair.prototype, "keyNamePrefix", {
        get: function () {
            return this.getStringAttribute('key_name_prefix');
        },
        set: function (value) {
            this._keyNamePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    KeyPair.prototype.resetKeyNamePrefix = function () {
        this._keyNamePrefix = undefined;
    };
    Object.defineProperty(KeyPair.prototype, "keyNamePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyNamePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyPair.prototype, "keyPairId", {
        // key_pair_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_pair_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyPair.prototype, "publicKey", {
        get: function () {
            return this.getStringAttribute('public_key');
        },
        set: function (value) {
            this._publicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyPair.prototype, "publicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyPair.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    KeyPair.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(KeyPair.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyPair.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    KeyPair.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(KeyPair.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    KeyPair.prototype.synthesizeAttributes = function () {
        return {
            key_name: cdktf.stringToTerraform(this._keyName),
            key_name_prefix: cdktf.stringToTerraform(this._keyNamePrefix),
            public_key: cdktf.stringToTerraform(this._publicKey),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KeyPair.tfResourceType = "aws_key_pair";
    return KeyPair;
}(cdktf.TerraformResource));
exports.KeyPair = KeyPair;

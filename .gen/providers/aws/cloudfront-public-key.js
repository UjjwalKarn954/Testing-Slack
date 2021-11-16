"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html
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
exports.CloudfrontPublicKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html aws_cloudfront_public_key}
*/
var CloudfrontPublicKey = /** @class */ (function (_super) {
    __extends(CloudfrontPublicKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html aws_cloudfront_public_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontPublicKeyConfig
    */
    function CloudfrontPublicKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_public_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._comment = config.comment;
        _this._encodedKey = config.encodedKey;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        return _this;
    }
    Object.defineProperty(CloudfrontPublicKey.prototype, "callerReference", {
        // ==========
        // ATTRIBUTES
        // ==========
        // caller_reference - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('caller_reference');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontPublicKey.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontPublicKey.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(CloudfrontPublicKey.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontPublicKey.prototype, "encodedKey", {
        get: function () {
            return this.getStringAttribute('encoded_key');
        },
        set: function (value) {
            this._encodedKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontPublicKey.prototype, "encodedKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encodedKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontPublicKey.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontPublicKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontPublicKey.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontPublicKey.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(CloudfrontPublicKey.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontPublicKey.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontPublicKey.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(CloudfrontPublicKey.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontPublicKey.prototype.synthesizeAttributes = function () {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            encoded_key: cdktf.stringToTerraform(this._encodedKey),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontPublicKey.tfResourceType = "aws_cloudfront_public_key";
    return CloudfrontPublicKey;
}(cdktf.TerraformResource));
exports.CloudfrontPublicKey = CloudfrontPublicKey;

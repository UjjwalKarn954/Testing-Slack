"use strict";
// https://www.terraform.io/docs/providers/aws/r/kms_alias.html
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
exports.KmsAlias = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html aws_kms_alias}
*/
var KmsAlias = /** @class */ (function (_super) {
    __extends(KmsAlias, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html aws_kms_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsAliasConfig
    */
    function KmsAlias(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_alias',
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
        _this._targetKeyId = config.targetKeyId;
        return _this;
    }
    Object.defineProperty(KmsAlias.prototype, "arn", {
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
    Object.defineProperty(KmsAlias.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsAlias.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsAlias.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(KmsAlias.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsAlias.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsAlias.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(KmsAlias.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsAlias.prototype, "targetKeyArn", {
        // target_key_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_key_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsAlias.prototype, "targetKeyId", {
        get: function () {
            return this.getStringAttribute('target_key_id');
        },
        set: function (value) {
            this._targetKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsAlias.prototype, "targetKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetKeyId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    KmsAlias.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            target_key_id: cdktf.stringToTerraform(this._targetKeyId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KmsAlias.tfResourceType = "aws_kms_alias";
    return KmsAlias;
}(cdktf.TerraformResource));
exports.KmsAlias = KmsAlias;

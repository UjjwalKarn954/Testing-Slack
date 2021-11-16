"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_tag.html
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
exports.Ec2Tag = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html aws_ec2_tag}
*/
var Ec2Tag = /** @class */ (function (_super) {
    __extends(Ec2Tag, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_tag.html aws_ec2_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TagConfig
    */
    function Ec2Tag(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_tag',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._key = config.key;
        _this._resourceId = config.resourceId;
        _this._value = config.value;
        return _this;
    }
    Object.defineProperty(Ec2Tag.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Tag.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Tag.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Tag.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Tag.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Tag.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Tag.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2Tag.prototype.synthesizeAttributes = function () {
        return {
            key: cdktf.stringToTerraform(this._key),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            value: cdktf.stringToTerraform(this._value)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2Tag.tfResourceType = "aws_ec2_tag";
    return Ec2Tag;
}(cdktf.TerraformResource));
exports.Ec2Tag = Ec2Tag;

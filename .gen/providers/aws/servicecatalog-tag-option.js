"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html
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
exports.ServicecatalogTagOption = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html aws_servicecatalog_tag_option}
*/
var ServicecatalogTagOption = /** @class */ (function (_super) {
    __extends(ServicecatalogTagOption, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html aws_servicecatalog_tag_option} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogTagOptionConfig
    */
    function ServicecatalogTagOption(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_tag_option',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._active = config.active;
        _this._key = config.key;
        _this._value = config.value;
        return _this;
    }
    Object.defineProperty(ServicecatalogTagOption.prototype, "active", {
        get: function () {
            return this.getBooleanAttribute('active');
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogTagOption.prototype.resetActive = function () {
        this._active = undefined;
    };
    Object.defineProperty(ServicecatalogTagOption.prototype, "activeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOption.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOption.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOption.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOption.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOption.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOption.prototype, "valueInput", {
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
    ServicecatalogTagOption.prototype.synthesizeAttributes = function () {
        return {
            active: cdktf.booleanToTerraform(this._active),
            key: cdktf.stringToTerraform(this._key),
            value: cdktf.stringToTerraform(this._value)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogTagOption.tfResourceType = "aws_servicecatalog_tag_option";
    return ServicecatalogTagOption;
}(cdktf.TerraformResource));
exports.ServicecatalogTagOption = ServicecatalogTagOption;

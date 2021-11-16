"use strict";
// https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html
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
exports.IotThingPrincipalAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html aws_iot_thing_principal_attachment}
*/
var IotThingPrincipalAttachment = /** @class */ (function (_super) {
    __extends(IotThingPrincipalAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html aws_iot_thing_principal_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingPrincipalAttachmentConfig
    */
    function IotThingPrincipalAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iot_thing_principal_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._principal = config.principal;
        _this._thing = config.thing;
        return _this;
    }
    Object.defineProperty(IotThingPrincipalAttachment.prototype, "id", {
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
    Object.defineProperty(IotThingPrincipalAttachment.prototype, "principal", {
        get: function () {
            return this.getStringAttribute('principal');
        },
        set: function (value) {
            this._principal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThingPrincipalAttachment.prototype, "principalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThingPrincipalAttachment.prototype, "thing", {
        get: function () {
            return this.getStringAttribute('thing');
        },
        set: function (value) {
            this._thing = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThingPrincipalAttachment.prototype, "thingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thing;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IotThingPrincipalAttachment.prototype.synthesizeAttributes = function () {
        return {
            principal: cdktf.stringToTerraform(this._principal),
            thing: cdktf.stringToTerraform(this._thing)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IotThingPrincipalAttachment.tfResourceType = "aws_iot_thing_principal_attachment";
    return IotThingPrincipalAttachment;
}(cdktf.TerraformResource));
exports.IotThingPrincipalAttachment = IotThingPrincipalAttachment;

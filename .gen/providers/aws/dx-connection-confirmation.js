"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_connection_confirmation.html
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
exports.DxConnectionConfirmation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_confirmation.html aws_dx_connection_confirmation}
*/
var DxConnectionConfirmation = /** @class */ (function (_super) {
    __extends(DxConnectionConfirmation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_confirmation.html aws_dx_connection_confirmation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxConnectionConfirmationConfig
    */
    function DxConnectionConfirmation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_connection_confirmation',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._connectionId = config.connectionId;
        return _this;
    }
    Object.defineProperty(DxConnectionConfirmation.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnectionConfirmation.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnectionConfirmation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DxConnectionConfirmation.prototype.synthesizeAttributes = function () {
        return {
            connection_id: cdktf.stringToTerraform(this._connectionId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxConnectionConfirmation.tfResourceType = "aws_dx_connection_confirmation";
    return DxConnectionConfirmation;
}(cdktf.TerraformResource));
exports.DxConnectionConfirmation = DxConnectionConfirmation;

"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html
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
exports.DxConnectionAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html aws_dx_connection_association}
*/
var DxConnectionAssociation = /** @class */ (function (_super) {
    __extends(DxConnectionAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html aws_dx_connection_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxConnectionAssociationConfig
    */
    function DxConnectionAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_connection_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._connectionId = config.connectionId;
        _this._lagId = config.lagId;
        return _this;
    }
    Object.defineProperty(DxConnectionAssociation.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnectionAssociation.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnectionAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnectionAssociation.prototype, "lagId", {
        get: function () {
            return this.getStringAttribute('lag_id');
        },
        set: function (value) {
            this._lagId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnectionAssociation.prototype, "lagIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lagId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DxConnectionAssociation.prototype.synthesizeAttributes = function () {
        return {
            connection_id: cdktf.stringToTerraform(this._connectionId),
            lag_id: cdktf.stringToTerraform(this._lagId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxConnectionAssociation.tfResourceType = "aws_dx_connection_association";
    return DxConnectionAssociation;
}(cdktf.TerraformResource));
exports.DxConnectionAssociation = DxConnectionAssociation;

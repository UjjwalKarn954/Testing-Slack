"use strict";
// https://www.terraform.io/docs/providers/aws/r/elb_attachment.html
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
exports.ElbAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html aws_elb_attachment}
*/
var ElbAttachment = /** @class */ (function (_super) {
    __extends(ElbAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html aws_elb_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElbAttachmentConfig
    */
    function ElbAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elb_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._elb = config.elb;
        _this._instance = config.instance;
        return _this;
    }
    Object.defineProperty(ElbAttachment.prototype, "elb", {
        get: function () {
            return this.getStringAttribute('elb');
        },
        set: function (value) {
            this._elb = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElbAttachment.prototype, "elbInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElbAttachment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElbAttachment.prototype, "instance", {
        get: function () {
            return this.getStringAttribute('instance');
        },
        set: function (value) {
            this._instance = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElbAttachment.prototype, "instanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElbAttachment.prototype.synthesizeAttributes = function () {
        return {
            elb: cdktf.stringToTerraform(this._elb),
            instance: cdktf.stringToTerraform(this._instance)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElbAttachment.tfResourceType = "aws_elb_attachment";
    return ElbAttachment;
}(cdktf.TerraformResource));
exports.ElbAttachment = ElbAttachment;

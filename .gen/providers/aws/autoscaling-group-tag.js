"use strict";
// https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html
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
exports.AutoscalingGroupTagA = void 0;
var cdktf = require("cdktf");
function autoscalingGroupTagTagToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        propagate_at_launch: cdktf.booleanToTerraform(struct.propagateAtLaunch),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag}
*/
var AutoscalingGroupTagA = /** @class */ (function (_super) {
    __extends(AutoscalingGroupTagA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupTagAConfig
    */
    function AutoscalingGroupTagA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscaling_group_tag',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoscalingGroupName = config.autoscalingGroupName;
        _this._tag = config.tag;
        return _this;
    }
    Object.defineProperty(AutoscalingGroupTagA.prototype, "autoscalingGroupName", {
        get: function () {
            return this.getStringAttribute('autoscaling_group_name');
        },
        set: function (value) {
            this._autoscalingGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroupTagA.prototype, "autoscalingGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoscalingGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroupTagA.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroupTagA.prototype, "tag", {
        get: function () {
            return this.interpolationForAttribute('tag');
        },
        set: function (value) {
            this._tag = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroupTagA.prototype, "tagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tag;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AutoscalingGroupTagA.prototype.synthesizeAttributes = function () {
        return {
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            tag: cdktf.listMapper(autoscalingGroupTagTagToTerraform)(this._tag)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AutoscalingGroupTagA.tfResourceType = "aws_autoscaling_group_tag";
    return AutoscalingGroupTagA;
}(cdktf.TerraformResource));
exports.AutoscalingGroupTagA = AutoscalingGroupTagA;

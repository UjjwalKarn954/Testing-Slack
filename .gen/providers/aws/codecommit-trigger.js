"use strict";
// https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html
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
exports.CodecommitTrigger = void 0;
var cdktf = require("cdktf");
function codecommitTriggerTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        branches: cdktf.listMapper(cdktf.stringToTerraform)(struct.branches),
        custom_data: cdktf.stringToTerraform(struct.customData),
        destination_arn: cdktf.stringToTerraform(struct.destinationArn),
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
        name: cdktf.stringToTerraform(struct.name)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger}
*/
var CodecommitTrigger = /** @class */ (function (_super) {
    __extends(CodecommitTrigger, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitTriggerConfig
    */
    function CodecommitTrigger(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codecommit_trigger',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._repositoryName = config.repositoryName;
        _this._trigger = config.trigger;
        return _this;
    }
    Object.defineProperty(CodecommitTrigger.prototype, "configurationId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // configuration_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('configuration_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitTrigger.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitTrigger.prototype, "repositoryName", {
        get: function () {
            return this.getStringAttribute('repository_name');
        },
        set: function (value) {
            this._repositoryName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitTrigger.prototype, "repositoryNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitTrigger.prototype, "trigger", {
        get: function () {
            return this.interpolationForAttribute('trigger');
        },
        set: function (value) {
            this._trigger = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitTrigger.prototype, "triggerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trigger;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodecommitTrigger.prototype.synthesizeAttributes = function () {
        return {
            repository_name: cdktf.stringToTerraform(this._repositoryName),
            trigger: cdktf.listMapper(codecommitTriggerTriggerToTerraform)(this._trigger)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodecommitTrigger.tfResourceType = "aws_codecommit_trigger";
    return CodecommitTrigger;
}(cdktf.TerraformResource));
exports.CodecommitTrigger = CodecommitTrigger;

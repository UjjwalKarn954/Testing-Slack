"use strict";
// https://www.terraform.io/docs/providers/aws/d/sfn_state_machine.html
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
exports.DataAwsSfnStateMachine = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/sfn_state_machine.html aws_sfn_state_machine}
*/
var DataAwsSfnStateMachine = /** @class */ (function (_super) {
    __extends(DataAwsSfnStateMachine, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sfn_state_machine.html aws_sfn_state_machine} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSfnStateMachineConfig
    */
    function DataAwsSfnStateMachine(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sfn_state_machine',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsSfnStateMachine.prototype, "arn", {
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
    Object.defineProperty(DataAwsSfnStateMachine.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSfnStateMachine.prototype, "definition", {
        // definition - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('definition');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSfnStateMachine.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSfnStateMachine.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSfnStateMachine.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSfnStateMachine.prototype, "roleArn", {
        // role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSfnStateMachine.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSfnStateMachine.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSfnStateMachine.tfResourceType = "aws_sfn_state_machine";
    return DataAwsSfnStateMachine;
}(cdktf.TerraformDataSource));
exports.DataAwsSfnStateMachine = DataAwsSfnStateMachine;

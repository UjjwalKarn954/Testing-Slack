"use strict";
// https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html
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
exports.DataAwsElasticBeanstalkSolutionStack = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html aws_elastic_beanstalk_solution_stack}
*/
var DataAwsElasticBeanstalkSolutionStack = /** @class */ (function (_super) {
    __extends(DataAwsElasticBeanstalkSolutionStack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html aws_elastic_beanstalk_solution_stack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticBeanstalkSolutionStackConfig
    */
    function DataAwsElasticBeanstalkSolutionStack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elastic_beanstalk_solution_stack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._mostRecent = config.mostRecent;
        _this._nameRegex = config.nameRegex;
        return _this;
    }
    Object.defineProperty(DataAwsElasticBeanstalkSolutionStack.prototype, "id", {
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
    Object.defineProperty(DataAwsElasticBeanstalkSolutionStack.prototype, "mostRecent", {
        get: function () {
            return this.getBooleanAttribute('most_recent');
        },
        set: function (value) {
            this._mostRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsElasticBeanstalkSolutionStack.prototype.resetMostRecent = function () {
        this._mostRecent = undefined;
    };
    Object.defineProperty(DataAwsElasticBeanstalkSolutionStack.prototype, "mostRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mostRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkSolutionStack.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkSolutionStack.prototype, "nameRegex", {
        get: function () {
            return this.getStringAttribute('name_regex');
        },
        set: function (value) {
            this._nameRegex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkSolutionStack.prototype, "nameRegexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nameRegex;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsElasticBeanstalkSolutionStack.prototype.synthesizeAttributes = function () {
        return {
            most_recent: cdktf.booleanToTerraform(this._mostRecent),
            name_regex: cdktf.stringToTerraform(this._nameRegex)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsElasticBeanstalkSolutionStack.tfResourceType = "aws_elastic_beanstalk_solution_stack";
    return DataAwsElasticBeanstalkSolutionStack;
}(cdktf.TerraformDataSource));
exports.DataAwsElasticBeanstalkSolutionStack = DataAwsElasticBeanstalkSolutionStack;

"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html
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
exports.CloudwatchQueryDefinition = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html aws_cloudwatch_query_definition}
*/
var CloudwatchQueryDefinition = /** @class */ (function (_super) {
    __extends(CloudwatchQueryDefinition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_query_definition.html aws_cloudwatch_query_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchQueryDefinitionConfig
    */
    function CloudwatchQueryDefinition(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_query_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._logGroupNames = config.logGroupNames;
        _this._name = config.name;
        _this._queryString = config.queryString;
        return _this;
    }
    Object.defineProperty(CloudwatchQueryDefinition.prototype, "id", {
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
    Object.defineProperty(CloudwatchQueryDefinition.prototype, "logGroupNames", {
        get: function () {
            return this.getListAttribute('log_group_names');
        },
        set: function (value) {
            this._logGroupNames = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchQueryDefinition.prototype.resetLogGroupNames = function () {
        this._logGroupNames = undefined;
    };
    Object.defineProperty(CloudwatchQueryDefinition.prototype, "logGroupNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logGroupNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchQueryDefinition.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchQueryDefinition.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchQueryDefinition.prototype, "queryDefinitionId", {
        // query_definition_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('query_definition_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchQueryDefinition.prototype, "queryString", {
        get: function () {
            return this.getStringAttribute('query_string');
        },
        set: function (value) {
            this._queryString = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchQueryDefinition.prototype, "queryStringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queryString;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchQueryDefinition.prototype.synthesizeAttributes = function () {
        return {
            log_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._logGroupNames),
            name: cdktf.stringToTerraform(this._name),
            query_string: cdktf.stringToTerraform(this._queryString)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchQueryDefinition.tfResourceType = "aws_cloudwatch_query_definition";
    return CloudwatchQueryDefinition;
}(cdktf.TerraformResource));
exports.CloudwatchQueryDefinition = CloudwatchQueryDefinition;

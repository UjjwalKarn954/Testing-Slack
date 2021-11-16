"use strict";
// https://www.terraform.io/docs/providers/aws/d/glue_connection.html
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
exports.DataAwsGlueConnection = exports.DataAwsGlueConnectionPhysicalConnectionRequirements = void 0;
var cdktf = require("cdktf");
var DataAwsGlueConnectionPhysicalConnectionRequirements = /** @class */ (function (_super) {
    __extends(DataAwsGlueConnectionPhysicalConnectionRequirements, _super);
    function DataAwsGlueConnectionPhysicalConnectionRequirements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsGlueConnectionPhysicalConnectionRequirements.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueConnectionPhysicalConnectionRequirements.prototype, "securityGroupIdList", {
        // security_group_id_list - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_group_id_list');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueConnectionPhysicalConnectionRequirements.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsGlueConnectionPhysicalConnectionRequirements;
}(cdktf.ComplexComputedList));
exports.DataAwsGlueConnectionPhysicalConnectionRequirements = DataAwsGlueConnectionPhysicalConnectionRequirements;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html aws_glue_connection}
*/
var DataAwsGlueConnection = /** @class */ (function (_super) {
    __extends(DataAwsGlueConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html aws_glue_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueConnectionConfig
    */
    function DataAwsGlueConnection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._id = config.id;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsGlueConnection.prototype, "arn", {
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
    Object.defineProperty(DataAwsGlueConnection.prototype, "catalogId", {
        // catalog_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        enumerable: false,
        configurable: true
    });
    // connection_properties - computed: true, optional: false, required: false
    DataAwsGlueConnection.prototype.connectionProperties = function (key) {
        return new cdktf.StringMap(this, 'connection_properties').lookup(key);
    };
    Object.defineProperty(DataAwsGlueConnection.prototype, "connectionType", {
        // connection_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connection_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueConnection.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueConnection.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueConnection.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueConnection.prototype, "matchCriteria", {
        // match_criteria - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('match_criteria');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueConnection.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    // physical_connection_requirements - computed: true, optional: false, required: false
    DataAwsGlueConnection.prototype.physicalConnectionRequirements = function (index) {
        return new DataAwsGlueConnectionPhysicalConnectionRequirements(this, 'physical_connection_requirements', index);
    };
    Object.defineProperty(DataAwsGlueConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsGlueConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsGlueConnection.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsGlueConnection.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsGlueConnection.tfResourceType = "aws_glue_connection";
    return DataAwsGlueConnection;
}(cdktf.TerraformDataSource));
exports.DataAwsGlueConnection = DataAwsGlueConnection;

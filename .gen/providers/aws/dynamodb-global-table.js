"use strict";
// https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html
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
exports.DynamodbGlobalTable = void 0;
var cdktf = require("cdktf");
function dynamodbGlobalTableReplicaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        region_name: cdktf.stringToTerraform(struct.regionName)
    };
}
function dynamodbGlobalTableTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table}
*/
var DynamodbGlobalTable = /** @class */ (function (_super) {
    __extends(DynamodbGlobalTable, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbGlobalTableConfig
    */
    function DynamodbGlobalTable(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dynamodb_global_table',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._replica = config.replica;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DynamodbGlobalTable.prototype, "arn", {
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
    Object.defineProperty(DynamodbGlobalTable.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbGlobalTable.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbGlobalTable.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbGlobalTable.prototype, "replica", {
        get: function () {
            return this.interpolationForAttribute('replica');
        },
        set: function (value) {
            this._replica = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbGlobalTable.prototype, "replicaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replica;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbGlobalTable.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbGlobalTable.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DynamodbGlobalTable.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DynamodbGlobalTable.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            replica: cdktf.listMapper(dynamodbGlobalTableReplicaToTerraform)(this._replica),
            timeouts: dynamodbGlobalTableTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DynamodbGlobalTable.tfResourceType = "aws_dynamodb_global_table";
    return DynamodbGlobalTable;
}(cdktf.TerraformResource));
exports.DynamodbGlobalTable = DynamodbGlobalTable;

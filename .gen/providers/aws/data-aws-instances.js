"use strict";
// https://www.terraform.io/docs/providers/aws/d/instances.html
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
exports.DataAwsInstances = void 0;
var cdktf = require("cdktf");
function dataAwsInstancesFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances}
*/
var DataAwsInstances = /** @class */ (function (_super) {
    __extends(DataAwsInstances, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInstancesConfig = {}
    */
    function DataAwsInstances(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_instances',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._instanceStateNames = config.instanceStateNames;
        _this._instanceTags = config.instanceTags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsInstances.prototype, "id", {
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
    Object.defineProperty(DataAwsInstances.prototype, "ids", {
        // ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstances.prototype, "instanceStateNames", {
        get: function () {
            return this.getListAttribute('instance_state_names');
        },
        set: function (value) {
            this._instanceStateNames = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInstances.prototype.resetInstanceStateNames = function () {
        this._instanceStateNames = undefined;
    };
    Object.defineProperty(DataAwsInstances.prototype, "instanceStateNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceStateNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstances.prototype, "instanceTags", {
        get: function () {
            return this.interpolationForAttribute('instance_tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._instanceTags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInstances.prototype.resetInstanceTags = function () {
        this._instanceTags = undefined;
    };
    Object.defineProperty(DataAwsInstances.prototype, "instanceTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstances.prototype, "privateIps", {
        // private_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('private_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstances.prototype, "publicIps", {
        // public_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('public_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstances.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInstances.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsInstances.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsInstances.prototype.synthesizeAttributes = function () {
        return {
            instance_state_names: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceStateNames),
            instance_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._instanceTags),
            filter: cdktf.listMapper(dataAwsInstancesFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsInstances.tfResourceType = "aws_instances";
    return DataAwsInstances;
}(cdktf.TerraformDataSource));
exports.DataAwsInstances = DataAwsInstances;

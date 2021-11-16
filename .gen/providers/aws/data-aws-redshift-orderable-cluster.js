"use strict";
// https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html
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
exports.DataAwsRedshiftOrderableCluster = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster}
*/
var DataAwsRedshiftOrderableCluster = /** @class */ (function (_super) {
    __extends(DataAwsRedshiftOrderableCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftOrderableClusterConfig = {}
    */
    function DataAwsRedshiftOrderableCluster(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_redshift_orderable_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterType = config.clusterType;
        _this._clusterVersion = config.clusterVersion;
        _this._nodeType = config.nodeType;
        _this._preferredNodeTypes = config.preferredNodeTypes;
        return _this;
    }
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "availabilityZones", {
        // ==========
        // ATTRIBUTES
        // ==========
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "clusterType", {
        get: function () {
            return this.getStringAttribute('cluster_type');
        },
        set: function (value) {
            this._clusterType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRedshiftOrderableCluster.prototype.resetClusterType = function () {
        this._clusterType = undefined;
    };
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "clusterTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "clusterVersion", {
        get: function () {
            return this.getStringAttribute('cluster_version');
        },
        set: function (value) {
            this._clusterVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRedshiftOrderableCluster.prototype.resetClusterVersion = function () {
        this._clusterVersion = undefined;
    };
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "clusterVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "nodeType", {
        get: function () {
            return this.getStringAttribute('node_type');
        },
        set: function (value) {
            this._nodeType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRedshiftOrderableCluster.prototype.resetNodeType = function () {
        this._nodeType = undefined;
    };
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "nodeTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "preferredNodeTypes", {
        get: function () {
            return this.getListAttribute('preferred_node_types');
        },
        set: function (value) {
            this._preferredNodeTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRedshiftOrderableCluster.prototype.resetPreferredNodeTypes = function () {
        this._preferredNodeTypes = undefined;
    };
    Object.defineProperty(DataAwsRedshiftOrderableCluster.prototype, "preferredNodeTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredNodeTypes;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRedshiftOrderableCluster.prototype.synthesizeAttributes = function () {
        return {
            cluster_type: cdktf.stringToTerraform(this._clusterType),
            cluster_version: cdktf.stringToTerraform(this._clusterVersion),
            node_type: cdktf.stringToTerraform(this._nodeType),
            preferred_node_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredNodeTypes)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRedshiftOrderableCluster.tfResourceType = "aws_redshift_orderable_cluster";
    return DataAwsRedshiftOrderableCluster;
}(cdktf.TerraformDataSource));
exports.DataAwsRedshiftOrderableCluster = DataAwsRedshiftOrderableCluster;

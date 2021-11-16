"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster.html
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
exports.Route53RecoverycontrolconfigCluster = exports.Route53RecoverycontrolconfigClusterClusterEndpoints = void 0;
var cdktf = require("cdktf");
var Route53RecoverycontrolconfigClusterClusterEndpoints = /** @class */ (function (_super) {
    __extends(Route53RecoverycontrolconfigClusterClusterEndpoints, _super);
    function Route53RecoverycontrolconfigClusterClusterEndpoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Route53RecoverycontrolconfigClusterClusterEndpoints.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigClusterClusterEndpoints.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return Route53RecoverycontrolconfigClusterClusterEndpoints;
}(cdktf.ComplexComputedList));
exports.Route53RecoverycontrolconfigClusterClusterEndpoints = Route53RecoverycontrolconfigClusterClusterEndpoints;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster.html aws_route53recoverycontrolconfig_cluster}
*/
var Route53RecoverycontrolconfigCluster = /** @class */ (function (_super) {
    __extends(Route53RecoverycontrolconfigCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster.html aws_route53recoverycontrolconfig_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigClusterConfig
    */
    function Route53RecoverycontrolconfigCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53recoverycontrolconfig_cluster',
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
    Object.defineProperty(Route53RecoverycontrolconfigCluster.prototype, "arn", {
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
    // cluster_endpoints - computed: true, optional: false, required: false
    Route53RecoverycontrolconfigCluster.prototype.clusterEndpoints = function (index) {
        return new Route53RecoverycontrolconfigClusterClusterEndpoints(this, 'cluster_endpoints', index);
    };
    Object.defineProperty(Route53RecoverycontrolconfigCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigCluster.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigCluster.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigCluster.prototype, "status", {
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
    Route53RecoverycontrolconfigCluster.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53RecoverycontrolconfigCluster.tfResourceType = "aws_route53recoverycontrolconfig_cluster";
    return Route53RecoverycontrolconfigCluster;
}(cdktf.TerraformResource));
exports.Route53RecoverycontrolconfigCluster = Route53RecoverycontrolconfigCluster;

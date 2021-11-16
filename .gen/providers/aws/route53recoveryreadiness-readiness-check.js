"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html
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
exports.Route53RecoveryreadinessReadinessCheck = void 0;
var cdktf = require("cdktf");
function route53RecoveryreadinessReadinessCheckTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html aws_route53recoveryreadiness_readiness_check}
*/
var Route53RecoveryreadinessReadinessCheck = /** @class */ (function (_super) {
    __extends(Route53RecoveryreadinessReadinessCheck, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html aws_route53recoveryreadiness_readiness_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessReadinessCheckConfig
    */
    function Route53RecoveryreadinessReadinessCheck(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53recoveryreadiness_readiness_check',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._readinessCheckName = config.readinessCheckName;
        _this._resourceSetName = config.resourceSetName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "arn", {
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
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "readinessCheckName", {
        get: function () {
            return this.getStringAttribute('readiness_check_name');
        },
        set: function (value) {
            this._readinessCheckName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "readinessCheckNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readinessCheckName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "resourceSetName", {
        get: function () {
            return this.getStringAttribute('resource_set_name');
        },
        set: function (value) {
            this._resourceSetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "resourceSetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceSetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessReadinessCheck.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessReadinessCheck.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessReadinessCheck.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessReadinessCheck.prototype, "timeoutsInput", {
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
    Route53RecoveryreadinessReadinessCheck.prototype.synthesizeAttributes = function () {
        return {
            readiness_check_name: cdktf.stringToTerraform(this._readinessCheckName),
            resource_set_name: cdktf.stringToTerraform(this._resourceSetName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: route53RecoveryreadinessReadinessCheckTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53RecoveryreadinessReadinessCheck.tfResourceType = "aws_route53recoveryreadiness_readiness_check";
    return Route53RecoveryreadinessReadinessCheck;
}(cdktf.TerraformResource));
exports.Route53RecoveryreadinessReadinessCheck = Route53RecoveryreadinessReadinessCheck;

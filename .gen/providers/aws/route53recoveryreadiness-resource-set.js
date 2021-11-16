"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html
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
exports.Route53RecoveryreadinessResourceSet = void 0;
var cdktf = require("cdktf");
function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn)
    };
}
function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        domain_name: cdktf.stringToTerraform(struct.domainName),
        record_set_id: cdktf.stringToTerraform(struct.recordSetId)
    };
}
function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        nlb_resource: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform)(struct.nlbResource),
        r53_resource: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform)(struct.r53Resource)
    };
}
function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        domain_name: cdktf.stringToTerraform(struct.domainName),
        hosted_zone_arn: cdktf.stringToTerraform(struct.hostedZoneArn),
        record_set_id: cdktf.stringToTerraform(struct.recordSetId),
        record_type: cdktf.stringToTerraform(struct.recordType),
        target_resource: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform)(struct.targetResource)
    };
}
function route53RecoveryreadinessResourceSetResourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        readiness_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct.readinessScopes),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        dns_target_resource: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform)(struct.dnsTargetResource)
    };
}
function route53RecoveryreadinessResourceSetTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set}
*/
var Route53RecoveryreadinessResourceSet = /** @class */ (function (_super) {
    __extends(Route53RecoveryreadinessResourceSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessResourceSetConfig
    */
    function Route53RecoveryreadinessResourceSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53recoveryreadiness_resource_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._resourceSetName = config.resourceSetName;
        _this._resourceSetType = config.resourceSetType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._resources = config.resources;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "arn", {
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
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "resourceSetName", {
        get: function () {
            return this.getStringAttribute('resource_set_name');
        },
        set: function (value) {
            this._resourceSetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "resourceSetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceSetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "resourceSetType", {
        get: function () {
            return this.getStringAttribute('resource_set_type');
        },
        set: function (value) {
            this._resourceSetType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "resourceSetTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceSetType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessResourceSet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessResourceSet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "resources", {
        get: function () {
            return this.interpolationForAttribute('resources');
        },
        set: function (value) {
            this._resources = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "resourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoveryreadinessResourceSet.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Route53RecoveryreadinessResourceSet.prototype, "timeoutsInput", {
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
    Route53RecoveryreadinessResourceSet.prototype.synthesizeAttributes = function () {
        return {
            resource_set_name: cdktf.stringToTerraform(this._resourceSetName),
            resource_set_type: cdktf.stringToTerraform(this._resourceSetType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            resources: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesToTerraform)(this._resources),
            timeouts: route53RecoveryreadinessResourceSetTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53RecoveryreadinessResourceSet.tfResourceType = "aws_route53recoveryreadiness_resource_set";
    return Route53RecoveryreadinessResourceSet;
}(cdktf.TerraformResource));
exports.Route53RecoveryreadinessResourceSet = Route53RecoveryreadinessResourceSet;

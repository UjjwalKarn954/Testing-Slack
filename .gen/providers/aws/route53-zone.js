"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_zone.html
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
exports.Route53Zone = void 0;
var cdktf = require("cdktf");
function route53ZoneVpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        vpc_id: cdktf.stringToTerraform(struct.vpcId),
        vpc_region: cdktf.stringToTerraform(struct.vpcRegion)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html aws_route53_zone}
*/
var Route53Zone = /** @class */ (function (_super) {
    __extends(Route53Zone, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html aws_route53_zone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ZoneConfig
    */
    function Route53Zone(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_zone',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._comment = config.comment;
        _this._delegationSetId = config.delegationSetId;
        _this._forceDestroy = config.forceDestroy;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpc = config.vpc;
        return _this;
    }
    Object.defineProperty(Route53Zone.prototype, "arn", {
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
    Object.defineProperty(Route53Zone.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Zone.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(Route53Zone.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "delegationSetId", {
        get: function () {
            return this.getStringAttribute('delegation_set_id');
        },
        set: function (value) {
            this._delegationSetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Zone.prototype.resetDelegationSetId = function () {
        this._delegationSetId = undefined;
    };
    Object.defineProperty(Route53Zone.prototype, "delegationSetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delegationSetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Zone.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(Route53Zone.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "nameServers", {
        // name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Zone.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53Zone.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Zone.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53Zone.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53Zone.prototype, "vpc", {
        get: function () {
            return this.interpolationForAttribute('vpc');
        },
        set: function (value) {
            this._vpc = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53Zone.prototype.resetVpc = function () {
        this._vpc = undefined;
    };
    Object.defineProperty(Route53Zone.prototype, "vpcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpc;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53Zone.prototype.synthesizeAttributes = function () {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            delegation_set_id: cdktf.stringToTerraform(this._delegationSetId),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc: cdktf.listMapper(route53ZoneVpcToTerraform)(this._vpc)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53Zone.tfResourceType = "aws_route53_zone";
    return Route53Zone;
}(cdktf.TerraformResource));
exports.Route53Zone = Route53Zone;

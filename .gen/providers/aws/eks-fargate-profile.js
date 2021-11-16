"use strict";
// https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html
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
exports.EksFargateProfile = void 0;
var cdktf = require("cdktf");
function eksFargateProfileSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct.labels),
        namespace: cdktf.stringToTerraform(struct.namespace)
    };
}
function eksFargateProfileTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile}
*/
var EksFargateProfile = /** @class */ (function (_super) {
    __extends(EksFargateProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksFargateProfileConfig
    */
    function EksFargateProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_eks_fargate_profile',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterName = config.clusterName;
        _this._fargateProfileName = config.fargateProfileName;
        _this._podExecutionRoleArn = config.podExecutionRoleArn;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._selector = config.selector;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(EksFargateProfile.prototype, "arn", {
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
    Object.defineProperty(EksFargateProfile.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "fargateProfileName", {
        get: function () {
            return this.getStringAttribute('fargate_profile_name');
        },
        set: function (value) {
            this._fargateProfileName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "fargateProfileNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fargateProfileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "podExecutionRoleArn", {
        get: function () {
            return this.getStringAttribute('pod_execution_role_arn');
        },
        set: function (value) {
            this._podExecutionRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "podExecutionRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._podExecutionRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    EksFargateProfile.prototype.resetSubnetIds = function () {
        this._subnetIds = undefined;
    };
    Object.defineProperty(EksFargateProfile.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EksFargateProfile.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EksFargateProfile.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EksFargateProfile.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EksFargateProfile.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "selector", {
        get: function () {
            return this.interpolationForAttribute('selector');
        },
        set: function (value) {
            this._selector = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "selectorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksFargateProfile.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    EksFargateProfile.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(EksFargateProfile.prototype, "timeoutsInput", {
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
    EksFargateProfile.prototype.synthesizeAttributes = function () {
        return {
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            fargate_profile_name: cdktf.stringToTerraform(this._fargateProfileName),
            pod_execution_role_arn: cdktf.stringToTerraform(this._podExecutionRoleArn),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            selector: cdktf.listMapper(eksFargateProfileSelectorToTerraform)(this._selector),
            timeouts: eksFargateProfileTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EksFargateProfile.tfResourceType = "aws_eks_fargate_profile";
    return EksFargateProfile;
}(cdktf.TerraformResource));
exports.EksFargateProfile = EksFargateProfile;
